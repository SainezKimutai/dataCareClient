import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faKey, faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { updateHeader } from 'src/app/shared/dev/dev';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private notifyService: NotificationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {  }
@ViewChild('email', {static: false}) emailField: ElementRef;

public ImprintLoader = false;

public faEnvelope = faEnvelope;
public faKey = faKey;
public faEye = faEye;
public faEyeSlash = faEyeSlash;
public faArrowLeft = faArrowLeft;


public passwordType = 'password';

public LoginForm: FormGroup;

public confirmationCode = '';

public verifyForm = false;

public ResetForm: FormGroup;
public passwordMatch = false;






  ngOnInit() {
    window.scrollTo(0, 0);
    sessionStorage.setItem('ActiveNav', 'login');

    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.ResetForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required]]
    });
  }



get formLogin() {return this.LoginForm.controls;  }
get formReset() {return this.ResetForm.controls;  }









togglePassword(text: string) {
  this.passwordType = text;
}






logUserIn() {
  if (this.LoginForm.valid) {
    this.ImprintLoader = true;
    this.login(this.LoginForm.value.email, this.LoginForm.value.password);
  }
  if (this.LoginForm.invalid) {
    this.notifyService.showWarning('Please input correct email and password', 'Invalid inputs');
  }
}



login(emailParam: any, passwordParam: any) {
  this.userService.login({email: emailParam, password: passwordParam}).subscribe(
    dataUser =>  {
        this.redirectAfterLogin(dataUser);
      },
      error => {this.notifyService.showError(error.error.message, 'Access denied'); this.ImprintLoader = false; }
    );
}



randomStr(len, arr) {
  let ans = '';
  for (let i = len; i > 0; i--) {
      ans = ans + arr[Math.floor(Math.random() * arr.length)].toUpperCase();
  }
  return ans;
}


resetPassword() {
  if (this.LoginForm.value.email === '') {
    this.emailField.nativeElement.className = 'is-invalid';
    this.notifyService.showInfo('Please type your email in the input', 'Email Needed');
  } else {
    this.ImprintLoader = true;
    this.confirmationCode = this.randomStr(7, '0123456789abcdefghijklmnopqrstuvwxyz');
    this.userService.passwordResetCode({email: this.LoginForm.value.email, code: this.confirmationCode}).subscribe(
      data => {
        this.ImprintLoader = false;
        this.notifyService.showInfo('A confirmation code has been sent to your email', 'Code sent');
        this.verifyForm = true;
      },
      error => {
        this.ImprintLoader = false;
        if (error.status === 404) {
         this.notifyService.showWarning('Email does not exist in our system', 'Not found');
        } else {
          this.notifyService.showError('Could not send verification code', 'Failed');
        }
      }
    );
  }
}



checkPasswordMatch() {
  if (this.ResetForm.value.password === this.ResetForm.value.password2) {
    this.passwordMatch = true;
  } else {
    this.passwordMatch = false;
  }
}





verifyCode() {
  if (this.ResetForm.value.code === this.confirmationCode) {
    this.verifyPassword();
  } else {
    this.notifyService.showWarning('Check the code once again', 'Unmatch !!');
  }
}





verifyPassword() {
  if (this.ResetForm.valid) {
    if (this.passwordMatch) {
      this.ImprintLoader = true;
      this.updatePassword();
    } else {
      this.notifyService.showWarning('Please match the password', 'Password do not match !');
    }
  }
  if (this.ResetForm.invalid) {
    this.notifyService.showWarning('Please input correct inputs', 'Invalid inputs');
  }
}







updatePassword() {
  const updateData = {
    email: this.LoginForm.value.email,
    password: this.ResetForm.value.password,
    unhashedPassword: this.ResetForm.value.password
  };
  this.userService.passwordReset(updateData).subscribe(
    data => {
      this.redirectAfterLogin(data);
    }, error => {
      this.ImprintLoader = false;
      this.notifyService.showWarning('Could not update password', 'Failed');
    }
  );
}






redirectAfterLogin(dataUser) {
  if (dataUser.userRole === 'normal') {
    sessionStorage.setItem('loggedUserToken', dataUser.token);
    sessionStorage.setItem('loggedUserName', dataUser.name);
    sessionStorage.setItem('loggedUserEmail', dataUser.email);
    sessionStorage.setItem('loggedUserID', dataUser._id);
    sessionStorage.setItem('permissionStatus', 'isNormal');

    updateHeader().then(() => {
      this.router.navigate(['/main/']);
      });

    } else if (dataUser.userRole === 'manager') {
      sessionStorage.setItem('loggedUserToken', dataUser.token);
      sessionStorage.setItem('loggedUserName', dataUser.name);
      sessionStorage.setItem('loggedUserEmail', dataUser.email);
      sessionStorage.setItem('loggedUserID', dataUser._id);
      sessionStorage.setItem('permissionStatus', 'isManager');

      updateHeader().then(() => {
        this.router.navigate(['/main/']);
      });

    } else if (dataUser.userRole === 'admin') {
      sessionStorage.setItem('loggedUserToken', dataUser.token);
      sessionStorage.setItem('loggedUserName', dataUser.name);
      sessionStorage.setItem('loggedUserEmail', dataUser.email);
      sessionStorage.setItem('loggedUserID', dataUser._id);
      sessionStorage.setItem('permissionStatus', 'isAdmin');

      updateHeader().then(() => {
        this.router.navigate(['/admin/']);
      });
    }

}


}

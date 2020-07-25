import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { faNetworkWired, faClock, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})




export class LoginComponent implements OnInit, OnDestroy {


  constructor(
    private router: Router,
    private notifyService: NotificationService,
    private formBuilder: FormBuilder
  ) {  }

public ImprintLoader = false;


// Icons
public faNetworkWired = faNetworkWired;
public faClock = faClock;
public faHandshake = faHandshake;


ngOnInit() {

}

ngOnDestroy() {

}

}

import { Component, OnInit } from '@angular/core';
import { faStethoscope, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public ImprintLoader = false;

  public faStethoscope = faStethoscope;
  public faCheck = faCheck;



  ngOnInit() {
  }







  login() {
    this.ImprintLoader = true;

    setTimeout(() => {
      this.router.navigate(['/menu']);
      this.ImprintLoader = false;
    }, 5000);
  }







}

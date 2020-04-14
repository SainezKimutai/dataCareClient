import { Component, OnInit } from '@angular/core';
import { faStethoscope, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public ImprintLoader = false;

  public faStethoscope = faStethoscope;
  public faCheck = faCheck;



  ngOnInit() {
  }










}

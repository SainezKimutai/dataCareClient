import { Component, OnInit } from '@angular/core';
import { faStethoscope, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() { }


  public faUser = faUser;
  public faStethoscope = faStethoscope;




  ngOnInit() {
  }






}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})

export class NotFoundComponent {

  constructor( private router: Router ) { }

  // tslint:disable: prefer-const
// tslint:disable: object-literal-shorthand

backToHomePage() { this.router.navigate(['/home']); }

}

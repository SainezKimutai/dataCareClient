import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dataCareClient';



  public ImprintLoader = false;


  startLoader() {
    this.ImprintLoader = true;
  }

  stopLoader() {
    this.ImprintLoader = false;
  }

}

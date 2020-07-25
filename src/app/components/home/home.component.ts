import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faNetworkWired, faClock, faHandshake, faBars } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})




export class HomeComponent implements OnInit, OnDestroy {


  constructor(
    private router: Router,
    private notifyService: NotificationService,
    private formBuilder: FormBuilder
  ) {  }
@ViewChild('navBarSection', {static: false}) navBarSection: ElementRef;


public CustomLoader = false;


// Icons
public faNetworkWired = faNetworkWired;
public faClock = faClock;
public faHandshake = faHandshake;
public faEnvelope = faEnvelope;
public faBars = faBars;

ngOnInit() {

}




@HostListener('window:scroll', []) onWindowScroll() {

  const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const myVerticalOffset = verticalOffset.toFixed(0);
  if (Number(myVerticalOffset) < 81) {
    this.navBarSection.nativeElement.className = 'navbar-section';
  } else if (Number(myVerticalOffset) > 80 && Number(myVerticalOffset) < 151) {
    this.navBarSection.nativeElement.className = 'navbar-section to-hide';
  } else if (Number(myVerticalOffset) > 150 ) {
    this.navBarSection.nativeElement.className = 'navbar-section to-fixed';
  }

}

ngOnDestroy() {

}

}

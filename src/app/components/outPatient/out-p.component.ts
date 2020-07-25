import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faHome, faUsers, faEdit, faCube, faPowerOff, faBars, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-outpatient',
  templateUrl: './out-p.component.html',
  styleUrls: ['./out-p.component.sass']
})
export class OutPatientComponent implements OnInit {

  constructor(
    private router: Router,
    private notifyService: NotificationService
  ) {  }

public sideBarStatus = true;

// icons
public faCube = faCube;
public faHome = faHome;
public faBars = faBars;
public faPowerOff = faPowerOff;
public faDiceD20 = faDiceD6;


// Nav Bar status
public ReceptionStatus = false;
public ExaminationStatus = false;
public LaboratoryStatus = false;
public XrayStatus = false;
public PharmacyStatus = false;

public myInterval: any;


ngOnInit() {
  this.myInterval = setInterval(() => {
    this.checkActiveNav();
  }, 50);
}



toHome() {
  this.router.navigate(['/docket']);
}



checkActiveNav() {
  this.ReceptionStatus = false;
  this.ExaminationStatus = false;
  this.LaboratoryStatus = false;
  this.XrayStatus = false;
  this.PharmacyStatus = false;
  if (sessionStorage.getItem('ActiveNav') === 'op-reception') {this.ReceptionStatus = true;
  } else if (sessionStorage.getItem('ActiveNav') === 'op-exam') {this.ExaminationStatus = true;
  } else if (sessionStorage.getItem('ActiveNav') === 'op-lab') {this.LaboratoryStatus = true;
  } else if (sessionStorage.getItem('ActiveNav') === 'op-xray') {this.XrayStatus = true;
  } else if (sessionStorage.getItem('ActiveNav') === 'op-pharmacy') {this.PharmacyStatus = true;
  }

}







logout() {
  sessionStorage.clear();
  this.router.navigate(['/home']);
}



}

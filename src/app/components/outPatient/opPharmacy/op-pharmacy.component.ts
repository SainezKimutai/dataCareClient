import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-op-pharmacy',
  templateUrl: './op-pharmacy.component.html',
  styleUrls: ['./op-pharmacy.component.sass']
})
export class OpPharmacyComponent implements OnInit {

  constructor(
    private notifyService: NotificationService
  ) {  }



ngOnInit() {
    sessionStorage.setItem('ActiveNav', 'op-pharmacy');
}












}

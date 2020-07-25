import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-op-xray',
  templateUrl: './op-xray.component.html',
  styleUrls: ['./op-xray.component.sass']
})
export class OpXrayComponent implements OnInit {

  constructor(
    private notifyService: NotificationService
  ) {  }



ngOnInit() {
    sessionStorage.setItem('ActiveNav', 'op-xray');
}












}

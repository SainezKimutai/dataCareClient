import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-op-reception',
  templateUrl: './op-reception.component.html',
  styleUrls: ['./op-reception.component.sass']
})
export class OpReceptionComponent implements OnInit {

  constructor(
    private notifyService: NotificationService
  ) {  }



ngOnInit() {
    sessionStorage.setItem('ActiveNav', 'op-reception');
}












}

import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-op-lab',
  templateUrl: './op-lab.component.html',
  styleUrls: ['./op-lab.component.sass']
})
export class OpLabComponent implements OnInit {

  constructor(
    private notifyService: NotificationService
  ) {  }



ngOnInit() {
    sessionStorage.setItem('ActiveNav', 'op-lab');
}












}

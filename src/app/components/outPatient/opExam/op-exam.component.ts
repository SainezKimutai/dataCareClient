import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-op-exam',
  templateUrl: './op-exam.component.html',
  styleUrls: ['./op-exam.component.sass']
})
export class OpExamComponent implements OnInit {

  constructor(
    private notifyService: NotificationService
  ) {  }



ngOnInit() {
    sessionStorage.setItem('ActiveNav', 'op-exam');
}












}

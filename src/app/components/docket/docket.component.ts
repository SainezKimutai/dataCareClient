import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-docket',
  templateUrl: './docket.component.html',
  styleUrls: ['./docket.component.sass']
})
export class DocketComponent implements OnInit {

  constructor(
    private router: Router,
    private notifyService: NotificationService
  ) {  }

// icons
public faPowerOff = faPowerOff;
ngOnInit() {

}



logout() {
  sessionStorage.clear();
  this.router.navigate(['/home']);
}



navigateTo(link: any) {
  this.router.navigate([link]);
}



}

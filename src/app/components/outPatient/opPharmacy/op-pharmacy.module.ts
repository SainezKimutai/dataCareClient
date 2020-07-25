import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { OpPharmacyComponent } from './op-pharmacy.component';
import { OpPharmacyRoutingModule } from './op-pharmacy-routing.module';


@NgModule({

  declarations: [
    OpPharmacyComponent
          ],

    imports: [
      CommonModule,
      OpPharmacyRoutingModule,
      AngularFontAwesomeModule,
      FontAwesomeModule,
      ReactiveFormsModule,
      FormsModule,
      ToastrModule.forRoot({
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
      })
    ]
  })

export class OpPharmacyModule {}

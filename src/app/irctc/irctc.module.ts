import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import {FormsModule}from'@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BookingComponent
  ],
  exports:[
    BookingComponent
  ]
})
export class IrctcModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IrctcModule } from './irctc/irctc.module';
import { FormService } from './core/form.service';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    IrctcModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * @author:sonal Prajapati
 */

import { Component, OnInit } from "@angular/core";

import { myData } from "../../form-data.model";
import { FormService } from "../../core/form.service";
@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})

export class BookingComponent implements OnInit {

  formsDetail: myData;
  submitedData: boolean;

  constructor(private formService: FormService) {
    this.submitedData = false;
  }

  ngOnInit() {

    this.formsDetail = this.formService.getDetails();
  }

  onSubmit() {
    this.submitedData = true;
    console.log("click");
  }
}

import { Injectable } from "@angular/core";
import { myData } from "../form-data.model";
import { FormData } from "../form-data.model";
@Injectable()
export class FormService {
  private formData: FormData = new FormData();

  constructor() {}

  getDetails(): myData {
    var temp: myData = {
      fromStation: this.formData.fromStation,
      toStation: this.formData.toStation,
      date: this.formData.date,
      trainNo: this.formData.trainNo,
      noOfTickets: this.formData.noOfTickets,
      typeOfTicket: this.formData.typeOfTicket
    };
    return temp;
  }
}

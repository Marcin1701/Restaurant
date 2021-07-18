import {Component, Inject} from '@angular/core';
import { Customer } from "../../../model/RestaurantModel"
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.less']
})
export class AddCustomerComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public customer: Customer,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

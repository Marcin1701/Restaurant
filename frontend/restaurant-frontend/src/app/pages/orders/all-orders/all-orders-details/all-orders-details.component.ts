import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrderResponse} from "../../../../model/RestaurantModel";

@Component({
  selector: 'app-all-orders-details',
  templateUrl: './all-orders-details.component.html',
  styleUrls: ['./all-orders-details.component.less']
})
export class AllOrdersDetailsComponent {

  constructor(public dialogRef: MatDialogRef<AllOrdersDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public order: OrderResponse
  ) {
    console.log(order);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MealResponse, OrderResponse} from "../../../../model/RestaurantModel";
import {HttpService} from "../../../../common/services/http.service";

@Component({
  selector: 'app-all-orders-details',
  templateUrl: './all-orders-details.component.html',
  styleUrls: ['./all-orders-details.component.less']
})
export class AllOrdersDetailsComponent {

  orderMeals!: MealResponse[];

  constructor(public dialogRef: MatDialogRef<AllOrdersDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public order: OrderResponse,
              private httpService: HttpService
  ) {
    this.httpService.getMealsByOrderId(order.orderId).subscribe(meals => {
      console.log("Meals recieved", meals);
      this.orderMeals = meals;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

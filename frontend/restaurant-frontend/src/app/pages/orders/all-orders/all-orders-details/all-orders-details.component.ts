import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MealNamesRequest, MealResponse, OrderResponse} from "../../../../model/RestaurantModel";
import {HttpService} from "../../../../common/services/http.service";

@Component({
  selector: 'app-all-orders-details',
  templateUrl: './all-orders-details.component.html',
  styleUrls: ['./all-orders-details.component.less']
})
export class AllOrdersDetailsComponent {

  orderMeals!: MealResponse[];

  constructor(@Inject(MAT_DIALOG_DATA) public order: OrderResponse,
              private httpService: HttpService
  ) {
    let parsedRequest = AllOrdersDetailsComponent.parseMealNames(order.mealNames);
    if (parsedRequest !== undefined) {
      parsedRequest.mealNames = parsedRequest.mealNames.slice(0, -1);
      this.httpService.getMealsByNames(parsedRequest).subscribe(meals => {
        this.orderMeals = meals;
      });
    }
  }

  private static parseMealNames(mealNames: string): MealNamesRequest | undefined {
    if (mealNames !== null) {
      return { mealNames: mealNames.toString() };
    } else {
      return undefined
    }
  }
}

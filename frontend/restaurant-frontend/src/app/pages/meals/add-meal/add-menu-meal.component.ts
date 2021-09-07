import {Component, Inject} from '@angular/core';
import {Meal, MealResponse} from "../../../model/RestaurantModel"
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-menu-meal',
  templateUrl: './add-menu-meal.component.html',
  styleUrls: ['./add-menu-meal.component.less']
})
export class AddMenuMealComponent {

  constructor(
    public dialogRef: MatDialogRef<AddMenuMealComponent>,
    @Inject(MAT_DIALOG_DATA) public meal: MealResponse,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

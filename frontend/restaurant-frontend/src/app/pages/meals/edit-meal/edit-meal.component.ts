import {Component, Inject} from '@angular/core';
import {Meal, MealResponse} from "../../../model/RestaurantModel"
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.less']
})
export class EditMenuMealComponent {

  constructor(
    public dialogRef: MatDialogRef<EditMenuMealComponent>,
    @Inject(MAT_DIALOG_DATA) public meal: MealResponse,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

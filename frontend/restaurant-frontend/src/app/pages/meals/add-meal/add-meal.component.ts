import {Component, Inject} from '@angular/core';
import { Meal } from "../../../model/RestaurantModel"
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.less']
})
export class AddMealComponent {

  constructor(
    public dialogRef: MatDialogRef<AddMealComponent>,
    @Inject(MAT_DIALOG_DATA) public meal: Meal,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

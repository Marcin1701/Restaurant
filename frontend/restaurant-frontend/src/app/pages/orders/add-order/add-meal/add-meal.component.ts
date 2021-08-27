import {Component, DoCheck, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.less']
})
export class AddMealComponent implements DoCheck {
  selectedMeal: string[] = [];
  mealFormControl = new FormControl();

  constructor(public dialogRef: MatDialogRef<AddMealComponent>,
              @Inject(MAT_DIALOG_DATA) public meal: string[])
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngDoCheck(): void {
    this.selectedMeal = this.mealFormControl.value;
  }
}

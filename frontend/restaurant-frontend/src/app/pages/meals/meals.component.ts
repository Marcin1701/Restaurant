import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Meal} from "../../model/RestaurantModel";
import {AddMenuMealComponent} from "./add-meal/add-menu-meal.component";
import { EditMenuMealComponent } from './edit-meal/edit-meal.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpService} from "../../common/services/http.service";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.less']
})
export class MealsComponent implements OnInit {
  addMealPopupWidth: string = '300px';
  newMeal!: Meal;
  allMeals: Meal[] = [];

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getMeals().subscribe(meals => this.allMeals = meals);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMenuMealComponent, {
      width: this.addMealPopupWidth,
      data: { meal: this.newMeal }
    });
    dialogRef.afterClosed().subscribe(meal => {
      if (meal !== undefined) {
        this.addMeal(meal);
        this.openSnackBar('Dodano posiłek!');
      } else {
        this.openSnackBar('Błędne dane!')
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2000
    })
  }

  private addMeal(meal: Meal) {
     this.httpService.addMeal(meal).subscribe();
     this.allMeals.push(meal);
     console.log("Meal", meal);
     window.location.reload();
  }
}

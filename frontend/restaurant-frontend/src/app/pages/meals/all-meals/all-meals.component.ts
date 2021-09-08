import { Component, ViewChild } from '@angular/core';
import { Meal, MealResponse } from '../../../model/RestaurantModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../common/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditMenuMealComponent } from '../edit-meal/edit-meal.component';
import {IngredientsComponent} from "../ingredients/ingredients.component";

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.less'],
})
export class AllMealsComponent {
  addMealPopupWidth: string = '300px';
  meals!: Meal[];
  tableDataSource!: MatTableDataSource<Meal>;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  columnNames: string[] = [
    'name',
    'price',
    'vegetarian',
    'vegan',
    'action',
    'ingredients',
    'delete',
  ];
  newMeal: MealResponse = {
    id: 0,
    mealId: 0,
    name: '',
    price: 0,
    vegan: false,
    vegetarian: false,
    quantities: [],
  };
  allMeals: MealResponse[] = [];
  addMealWidth: string = '800px';
  addMealHeight: string = '600px';

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private httpService: HttpService
  ) {
    this.httpService.getMeals().subscribe((meals) => {
      this.meals = meals;
      this.tableDataSource = new MatTableDataSource<Meal>(this.meals);
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.httpService.getMeals().subscribe((meals) => (this.allMeals = meals));
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditMenuMealComponent, {
      width: this.addMealWidth,
      height: this.addMealHeight,
      data: this.newMeal,
    });
    dialogRef.afterClosed().subscribe((meal) => {
      if (meal && meal.name !== undefined) {
        this.editMeal(meal);
        this.openSnackBar('Posiłek edytowany pomyślnie');
      } else {
        this.openSnackBar('Błędne dane!');
      }
    });
  }

  openEditDialog(meal: Meal) {
    const dialogRef = this.dialog.open(EditMenuMealComponent, {
      width: this.addMealPopupWidth,
      data: meal,
    });
    dialogRef.afterClosed().subscribe((meal) => {
      if (meal !== undefined) {
        this.updateMeal(meal);
        this.openSnackBar('Edytowano posiłek!');
      } else {
        this.openSnackBar('Błędne dane!');
      }
    });
  }

  deleteMeal(meal: MealResponse) {
    this.allMeals = this.allMeals.filter(function (existingMeals) {
      return existingMeals.id !== meal.id;
    });
    this.httpService.deleteMeal(meal.id).subscribe();
    window.location.reload();
  }

  addIngredient() {
    console.log('add ingredient');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  private updateMeal(meal: Meal) {
    this.httpService.editMeal(meal).subscribe();
    window.location.reload();
  }

  private editMeal(meal: Meal | any) {
    if (meal && meal.name !== undefined) {
      this.httpService.editMeal(meal).subscribe();
      window.location.reload();
    }
  }

  openIngredientDialog(meal: Meal) {
    const dialogRef = this.dialog.open(IngredientsComponent, {
      width: this.addMealWidth,
      height: this.addMealHeight,
      data: meal,
    });
    dialogRef.afterClosed().subscribe();
  }
}

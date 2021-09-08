import { Component, ViewChild } from '@angular/core';
import {
  Meal,
  MealResponse,
  OrderRequest,
} from '../../../model/RestaurantModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../common/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddOrderComponent } from '../../orders/add-order/add-order.component';
import { AddMealComponent } from '../../orders/add-order/add-meal/add-meal.component';
import { EditMenuMealComponent } from '../edit-meal/edit-meal.component';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.less'],
})
export class AllMealsComponent {
  meals!: Meal[];
  tableDataSource!: MatTableDataSource<Meal>;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  columnNames: string[] = ['name', 'price', 'vegetarian', 'vegan', 'action'];
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
    this.httpService.getMeals().subscribe(meals => this.allMeals = meals);
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

  deleteMeal(meal: MealResponse) {
    this.allMeals = this.allMeals.filter(function(existingMeals) {
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

  private editMeal(meal: Meal | any) {
    if (meal && meal.name !== undefined) {
        this.httpService.editMeal(meal).subscribe();
        window.location.reload();
      }
  }
}
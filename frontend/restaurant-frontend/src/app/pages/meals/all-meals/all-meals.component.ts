import {
  Component,
  ViewChild
} from '@angular/core';
import {Meal, OrderRequest} from "../../../model/RestaurantModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {HttpService} from "../../../common/services/http.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddOrderComponent} from "../../orders/add-order/add-order.component";
import { AddMealComponent } from '../../orders/add-order/add-meal/add-meal.component';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.less']
})
export class AllMealsComponent {
  meals!: Meal[];
  tableDataSource!: MatTableDataSource<Meal>;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  columnNames: string[] = ['name', 'price', 'vegetarian', 'vegan', 'action'];
  newOrder: OrderRequest = {
    table: null,
    takeAway: true,
    mealNames: [],
    cardPayment: false
  };
  addOrderWidth: string = '800px';
  addOrderHeight: string = '600px';

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private httpService: HttpService)
  {
    this.httpService.getMeals().subscribe(
      meals => {
        this.meals = meals;
        this.tableDataSource = new MatTableDataSource<Meal>(this.meals);
        this.tableDataSource.sort = this.sort;
        this.tableDataSource.paginator = this.paginator;
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMealComponent, {
      width: this.addOrderWidth,
      height: this.addOrderHeight,
      data: this.newOrder
    });
    dialogRef.afterClosed().subscribe(order => {
      if (order && order.mealNames !== undefined && order.table !== null) {
        this.addOrder(order);
        this.openSnackBar('Dodano zamówienie');
      } else {
        this.openSnackBar('Błędne dane!')
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 1000
    })
  }

  private addOrder(order: OrderRequest | any) {
  //   if (order.mealNames !== undefined && order.table !== null) {
  //     order.mealNames = order.mealNames[0];
  //     this.httpService.addOrder(order).subscribe();
  //     this.newOrder.table = null;
  //     window.location.reload();
  //   }
  }
}

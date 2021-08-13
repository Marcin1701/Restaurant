import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpService} from "../../common/services/http.service";
import {OrderRequest, OrderResponse} from "../../model/RestaurantModel";
import {AddOrderComponent} from "./add-order/add-order.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {
  addOrderWidth: string = '800px';

  addOrderHeight: string = '600px';

  newOrder: OrderRequest = {
    table: null,
    takeAway: false,
    mealNames: [],
    cardPayment: false
  };

  allOrders: OrderResponse[] = [];

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getOrders().subscribe(orders => this.allOrders = orders);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddOrderComponent, {
      width: this.addOrderWidth,
      height: this.addOrderHeight,
      data: this.newOrder
    });
    dialogRef.afterClosed().subscribe(order => {
      if (order !== undefined) {
        this.addOrder(order);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Dodano zamówienie', 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 1000
    })
  }

  private addOrder(order: OrderRequest) {
    this.httpService.addOrder(order).subscribe(addedOrder => this.allOrders.push(addedOrder));
    this.newOrder.table = null;
  }
}

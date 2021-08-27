import {Component, OnInit} from '@angular/core';
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

  private addOrder(order: OrderRequest) {
    console.log("All orders", this.allOrders);
    if (order.mealNames !== undefined && order.table !== null) {
      let concatenatedOrders = order.mealNames[0];
      if (typeof order.mealNames !== "string") {
        order.mealNames.forEach((singleOrder, index) => {
          if (index > 0) {
            concatenatedOrders = concatenatedOrders.concat(singleOrder);
          }
        });
      }
      order.mealNames = concatenatedOrders;
      console.log(order.mealNames);
      this.httpService.addOrder(order).subscribe(addedOrder => {
        console.log("added", addedOrder);
        this.allOrders.push(addedOrder)
      });
      this.newOrder.table = null;
      window.location.reload();
    }
  }

  deleteOrder(order: OrderResponse) {
    this.allOrders = this.allOrders.filter(function(existingOrders) {
      return existingOrders.orderId !== order.orderId;
    });
    this.httpService.deleteOrder(order.orderId).subscribe();
    window.location.reload();
  }
}

import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {OrderResponse} from "../../../model/RestaurantModel";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {HttpService} from "../../../common/services/http.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AllOrdersDetailsComponent} from "./all-orders-details/all-orders-details.component";
import { EditOrderComponent } from '../edit-order/edit-order.component';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less']
})
export class AllOrdersComponent {
  orders!: OrderResponse[];
  tableDataSource!: MatTableDataSource<OrderResponse>;
  columnsToDisplay: string[] = [
    'orderId',
    'price',
    'orderDate',
    'table',
    'cardPayment',
    'takeAway',
    'delete',
    'details',
    'edit'
  ];
  orderDetailsWidth: string = '800px';
  orderDetailsHeight: string = '600px';

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @Output()
  deleteOrder: EventEmitter<OrderResponse> = new EventEmitter<OrderResponse>();

  constructor(private httpService: HttpService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {
    this.httpService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.tableDataSource = new MatTableDataSource<OrderResponse>(this.orders);
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    })
  }

  openDialog(order: OrderResponse) {
    const dialogRef = this.dialog.open(AllOrdersDetailsComponent, {
      width: this.orderDetailsWidth,
      height: this.orderDetailsHeight,
      data: order
    });
    dialogRef.afterClosed().subscribe();
  }

  openEditDialog(order: OrderResponse) {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: this.orderDetailsWidth,
      data: order,
    });
    dialogRef.afterClosed().subscribe();
  }

  updateOrder(orderEdited: OrderResponse) {
     this.orders = this.orders.map(order => {
       if (order.orderId === orderEdited.orderId) {
        order.price = orderEdited.price;
        order.orderDate = orderEdited.orderDate;
        order.cardPayment = orderEdited.cardPayment;
        order.table = orderEdited.table;
        order.takeAway = orderEdited.takeAway;
       }
       return order;
     });
     this.httpService.editOrder(orderEdited).subscribe();
  }
}

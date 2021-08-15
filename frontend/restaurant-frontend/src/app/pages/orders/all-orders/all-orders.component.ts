import {Component, ViewChild} from '@angular/core';
import {OrderResponse} from "../../../model/RestaurantModel";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {HttpService} from "../../../common/services/http.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less']
})
export class AllOrdersComponent {
  orders!: OrderResponse[];
  columnsToDisplay: string[] = [
    'orderId',
    'price',
    'orderDate',
    'cardPayment',
    'table',
    'takeAway'
  ]
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  tableDataSource!: MatTableDataSource<OrderResponse>;

  constructor(private httpService: HttpService) {
    this.httpService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.tableDataSource = new MatTableDataSource<OrderResponse>(this.orders);
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    })
  }
}

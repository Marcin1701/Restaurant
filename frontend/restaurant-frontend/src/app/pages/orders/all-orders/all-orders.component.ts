import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {HttpService} from "../../../common/services/http.service";
import {OrderResponse} from "../../../model/RestaurantModel";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.less']
})
export class AllOrdersComponent implements AfterViewInit, OnChanges {

  @Input()
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
  sort: MatSort = new MatSort();

  tableDataSource = new MatTableDataSource(this.orders);

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.sort;
  }
}

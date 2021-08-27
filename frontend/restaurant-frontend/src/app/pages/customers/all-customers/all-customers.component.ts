import {
  Component,
  ViewChild
} from '@angular/core';
import {Customer, OrderRequest} from "../../../model/RestaurantModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {HttpService} from "../../../common/services/http.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddOrderComponent} from "../../orders/add-order/add-order.component";

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.less']
})
export class AllCustomersComponent {
  customers!: Customer[];
  tableDataSource!: MatTableDataSource<Customer>;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  columnNames: string[] = ['firstName', 'lastName', 'phoneNumber', 'action'];
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
    this.httpService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
        this.tableDataSource = new MatTableDataSource<Customer>(this.customers);
        this.tableDataSource.sort = this.sort;
        this.tableDataSource.paginator = this.paginator;
      }
    );
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
    order.mealNames = order.mealNames[0];
    this.httpService.addOrder(order).subscribe();
    this.newOrder.table = null;
  }
}

import { Component, ViewChild } from '@angular/core';
import { Customer, OrderRequest } from '../../../model/RestaurantModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../common/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddOrderComponent } from '../../orders/add-order/add-order.component';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.less'],
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
    cardPayment: false,
  };
  allCustomers: Customer[] = [];
  addOrderWidth: string = '800px';
  addOrderHeight: string = '600px';

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private httpService: HttpService
  ) {
    this.httpService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.tableDataSource = new MatTableDataSource<Customer>(this.customers);
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.httpService
      .getCustomers()
      .subscribe((customers) => (this.allCustomers = customers));
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddOrderComponent, {
      width: this.addOrderWidth,
      height: this.addOrderHeight,
      data: this.newOrder,
    });
    dialogRef.afterClosed().subscribe((order) => {
      if (order && order.mealNames !== undefined && order.table !== null) {
        this.addOrder(order);
        this.openSnackBar('Dodano zamówienie');
      } else {
        this.openSnackBar('Błędne dane!');
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
    });
  }

  deleteCustomer(customer: Customer) {
    this.allCustomers = this.allCustomers.filter(function (existingCustomers) {
      return existingCustomers.id !== customer.id;
    });
    console.log(customer);
    console.log(this.allCustomers);
    //this.httpService.deleteCustomer(customer.id).subscribe();
    //window.location.reload();
  }

  private addOrder(order: OrderRequest) {
    if (order.mealNames !== undefined && order.table !== null) {
      order.mealNames = order.mealNames[0];
      this.httpService.addOrder(order).subscribe();
      this.newOrder.table = null;
      window.location.reload();
    }
  }
}

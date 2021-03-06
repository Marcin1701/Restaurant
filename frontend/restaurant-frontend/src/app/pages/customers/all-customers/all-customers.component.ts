import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, OrderRequest } from '../../../model/RestaurantModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { HttpService } from '../../../common/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddOrderComponent } from '../../orders/add-order/add-order.component';
import {EditCustomerComponent} from "../edit-customer/edit-customer.component";

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.less'],
})
export class AllCustomersComponent implements OnInit {
  customers!: Customer[];
  tableDataSource!: MatTableDataSource<Customer>;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  columnNames: string[] = ['firstName', 'lastName', 'phoneNumber', 'action', 'delete', 'edit'];
  newOrder: OrderRequest = {
    table: null,
    takeAway: true,
    mealNames: [],
    cardPayment: false,
  };
  allCustomers: Customer[] = [];
  addOrderWidth: string = '800px';
  addOrderHeight: string = '600px';
  newCustomer: Customer = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

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
        this.openSnackBar('Dodano zam??wienie');
      } else {
        this.openSnackBar('B????dne dane!');
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
      return existingCustomers.customerId !== customer.customerId;
    });
    this.httpService.deleteCustomer(customer.customerId).subscribe();
    window.location.reload();
  }

  private addOrder(order: OrderRequest) {
    if (order.mealNames !== undefined && order.table !== null) {
      order.mealNames = order.mealNames[0];
      this.httpService.addOrder(order).subscribe();
      this.newOrder.table = null;
      window.location.reload();
    }
  }

  openEditDialog(customer: Customer) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: this.addOrderWidth,
      height: this.addOrderHeight,
      data: customer,
    });
    dialogRef.afterClosed().subscribe((customer) => {
      if (customer && customer.firstName !== ''
        && customer.lastName !== ''
        && customer.phoneNumber !== '') {
        this.editCustomer(customer);
        this.openSnackBar('Edytowano klienta!');
      } else {
        this.openSnackBar('B????dne dane!');
      }
    });
  }


  private editCustomer(editCustomer: Customer) {
    console.log("Customers", this.customers);
    console.log("Edited customer", editCustomer);
    this.customers = this.customers.map(customer => {
      if (customer.customerId == editCustomer.customerId) {
        customer.lastName = editCustomer.lastName;
        customer.firstName = editCustomer.firstName;
        customer.phoneNumber = editCustomer.phoneNumber;
      }
      return customer;
    });
    this.httpService.editCustomer(editCustomer).subscribe();
  }
}

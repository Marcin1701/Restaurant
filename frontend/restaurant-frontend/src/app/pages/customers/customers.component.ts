import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Customer} from "../../model/RestaurantModel";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpService} from "../../common/services/http.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  addCustomerPopupWidth: string = '300px';
  newCustomer!: Customer;
  allCustomers: Customer[] = [];

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getCustomers().subscribe(customers => this.allCustomers = customers);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: this.addCustomerPopupWidth,
      data: { customer: this.newCustomer }
    });
    dialogRef.afterClosed().subscribe(customer => {
      if (customer !== undefined) {
        this.addCustomer(customer);
        this.openSnackBar('Dodano klienta!');
      } else {
        this.openSnackBar('Błędne dane!')
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2000
    })
  }

  private addCustomer(customer: Customer) {
     this.httpService.addCustomer(customer).subscribe();
     this.allCustomers.push(customer);
     console.log("Customer", customer);
     window.location.reload();
  }
}

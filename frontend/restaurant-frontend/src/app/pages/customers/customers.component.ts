import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Customer} from "../../model/RestaurantModel";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {CustomerAction} from "../../actions/customer.action";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent {
  addCustomerPopupWidth: string = '300px';

  newCustomer: Customer = {firstName: "", lastName: "", phoneNumber: ""};

  constructor(public dialog: MatDialog,
              private customerAction: CustomerAction,
              private _snackBar: MatSnackBar) { }

  openDialog() {
    this.newCustomer = CustomersComponent.resetCustomer();
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: this.addCustomerPopupWidth,
      data: { customer: this.newCustomer }
    });
    dialogRef.afterClosed().subscribe(customer => {
      if (customer !== undefined) {
        this.addCustomer(customer);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Customer added!', 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2000
    })
  }

  private static resetCustomer(): Customer {
    return {firstName: "", lastName: "", phoneNumber: ""};
  }

  private addCustomer(customer: Customer) {
     this.customerAction.addCustomer(customer);
  }
}

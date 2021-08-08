import {Component, DoCheck, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {OrderRequest} from "../../../model/RestaurantModel";
import {FormControl} from "@angular/forms";
import {HttpService} from "../../../common/services/http.service";
import {CustomerAction} from "../../../actions/customer.action";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddMealComponent} from "./add-meal/add-meal.component";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less']
})
export class AddOrderComponent {

  addOrderWidth: string = '800px';

  mealNames: string[] = [];

  selectedMeals: string[] = [];

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<AddOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public order: OrderRequest,
    public dialog: MatDialog,
    private customerAction: CustomerAction,
    private _snackBar: MatSnackBar,
  ) {
    this.order.cardPayment = false;
    this.order.takeAway = false;
    this.httpService.getMeals().subscribe(meals => this.mealNames = meals.map(meal => meal.name));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMealComponent, {
      width: this.addOrderWidth,
      data: this.mealNames
    });
    dialogRef.afterClosed().subscribe(meal => {
      if (meal !== undefined) {
        this.addMeal(meal);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Dodano potrawę!', 'Ok', {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 500
    })
  }

  private addMeal(meal: string) {
    this.selectedMeals.push(meal);
  }

  setNewOrder() {
    this.order.mealNames = this.selectedMeals;
  }
}

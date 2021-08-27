import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {OrderRequest} from "../../../model/RestaurantModel";
import {FormControl, Validators} from "@angular/forms";
import {HttpService} from "../../../common/services/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddMealComponent} from "./add-meal/add-meal.component";
import {FormValidator} from "../../../common/validators/FormValidator";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less']
})
export class AddOrderComponent {
  addOrderWidth: string = '800px';
  mealNames: string[] = [];
  selectedMeals: string[] = [];
  tableFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
    Validators.pattern("^[0-9]*$")
  ]);
  matcher: FormValidator = new FormValidator();

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<AddOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public order: OrderRequest,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.order.cardPayment = false;
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
      if (meal !== null && meal !== undefined && meal !== '') {
        console.log("Meal", meal)
        this.addMeal(meal);
        this.openSnackBar('Dodano potrawę/potrawy');
      } else {
        this.openSnackBar('Błędne dane!');
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

  private addMeal(meal: string) {
    this.selectedMeals.push(meal);
  }

  setNewOrder() {
    this.order.mealNames = this.selectedMeals;
  }

  validateOrder(table: number | null): boolean {
    return table == null || table <= 0 || table >= 100;
  }
}

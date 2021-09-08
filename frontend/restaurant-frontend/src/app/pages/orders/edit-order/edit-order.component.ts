import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormValidator } from 'src/app/common/validators/FormValidator';
import { OrderResponse } from 'src/app/model/RestaurantModel';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.less']
})
export class EditOrderComponent implements OnInit {

  tableFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
    Validators.pattern("^[0-9]*$")
  ]);
  matcher: FormValidator = new FormValidator();

  constructor(
    public dialogRef: MatDialogRef<EditOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public order: OrderResponse,
  ) {}
  
  ngOnInit(): void {
  }

  validateOrder(table: number | null): boolean {
    return table == null || table <= 0 || table >= 100;
  }
}

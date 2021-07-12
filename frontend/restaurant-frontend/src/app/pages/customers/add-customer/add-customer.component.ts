import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Customer } from "../../../model/RestaurantModel"

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.less']
})
export class AddCustomerComponent implements OnInit {

  customerForm!: FormGroup;

  customer: Customer | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      phoneNumber: ''
    })
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
    }
    console.log(this.customer);
  }
}

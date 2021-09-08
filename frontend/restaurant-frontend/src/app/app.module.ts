import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { AllCustomersComponent } from './pages/customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './pages/customers/add-customer/add-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddOrderComponent } from './pages/orders/add-order/add-order.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { AddMealComponent } from './pages/orders/add-order/add-meal/add-meal.component';
import { AllOrdersComponent } from './pages/orders/all-orders/all-orders.component';
import { ISODate } from "./common/pipe/date.pipe";
import { AllOrdersDetailsComponent } from './pages/orders/all-orders/all-orders-details/all-orders-details.component';
import { MealsComponent } from './pages/meals/meals.component';
import { AllMealsComponent } from './pages/meals/all-meals/all-meals.component';
import { AddMenuMealComponent } from './pages/meals/add-meal/add-menu-meal.component';
import { EditMenuMealComponent } from './pages/meals/edit-meal/edit-meal.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { MealIngredientsComponent } from './pages/meals/meal-ingredients/meal-ingredients.component';
import { EditOrderComponent } from './pages/orders/edit-order/edit-order.component';
import { IngredientsComponent } from './pages/meals/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    OrdersComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    AddOrderComponent,
    AddMealComponent,
    AllOrdersComponent,
    ISODate,
    AllOrdersDetailsComponent,
    MealsComponent,
    AllMealsComponent,
    AddMenuMealComponent,
    EditMenuMealComponent,
    EditCustomerComponent,
    MealIngredientsComponent,
    EditOrderComponent,
    IngredientsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        FormsModule,
        MatListModule,
        MatTableModule,
        HttpClientModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

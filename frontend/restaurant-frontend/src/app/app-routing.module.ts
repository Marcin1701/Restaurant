import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AllCustomersComponent } from './pages/customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './pages/customers/add-customer/add-customer.component';
import { MealsComponent } from './pages/meals/meals.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: 'all', component: AllCustomersComponent },
      { path: 'add', component: AddCustomerComponent },
    ],
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'meals', component: MealsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

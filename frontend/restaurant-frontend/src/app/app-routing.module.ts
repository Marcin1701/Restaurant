import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./pages/customer/customer.component";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'klienci', component: CustomerComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

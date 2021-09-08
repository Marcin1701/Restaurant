import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from '../../../model/RestaurantModel';

@Component({
  selector: 'app-meal-ingredients',
  templateUrl: './meal-ingredients.component.html',
  styleUrls: ['./meal-ingredients.component.less'],
})
export class MealIngredientsComponent implements OnInit {
  tableDataSource!: MatTableDataSource<Ingredient>;
  constructor() {}

  ngOnInit(): void {}

  openDialog() {
    console.log("Open");
  }

  onNoClick() {
    console.log("Open");
  }

  addIngredient() {
    console.log('Add ingredient');
  }

  deleteIngredient(ingredient: Ingredient) {
    console.log('Delete ingredient');
  }
}

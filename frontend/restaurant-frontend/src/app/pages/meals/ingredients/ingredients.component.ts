import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IngredientResponse, MealResponse} from "../../../model/RestaurantModel";
import {HttpService} from "../../../common/services/http.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.less']
})
export class IngredientsComponent implements OnInit {

  ingredients!: IngredientResponse[];

  constructor(
    public dialogRef: MatDialogRef<IngredientsComponent>,
    @Inject(MAT_DIALOG_DATA) public meal: MealResponse,
    private httpService: HttpService
  ) {
    this.httpService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  ngOnInit(): void {
    this.httpService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }
}

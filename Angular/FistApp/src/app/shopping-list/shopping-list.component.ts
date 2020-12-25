import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredient[] = [];
  IngredientSubscription: Subscription = new Subscription();
  constructor(private ShoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredient();
    this.IngredientSubscription = this.ShoppingListService.IngredientChange.subscribe((ingredient:Ingredient[])=> {
      this.ingredients = ingredient;
    })
  }
  GetIngredient(e : Ingredient) {
    this.ingredients.push(e);
  }
  ngOnDestroy() {
    this.IngredientSubscription.unsubscribe();
  }
  onEdit(index : number) {
    this.ShoppingListService.startingEditing.next(index);
  }
}

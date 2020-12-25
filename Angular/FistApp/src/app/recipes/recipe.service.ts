import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model"
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('test', 'this is a test',
            'data:image/jpeg;base64,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', [
                new Ingredient('Meat', 1),
                new Ingredient('bread' , 2)
        ]),
        new Recipe('test2', 'this is a test2',
            'data:image/jpeg;base64,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', [
                new Ingredient('Chicked', 1),
                new Ingredient('Fries' , 20)
        ])
    ];
    getRecipe() {
        return this.recipes.slice();
    }
    getRecipebyindex(id: number) {
        return this.recipes.slice()[id];
    }
    constructor( private ShoppingListService: ShoppingListService) {
        
    }
    selectedRecipe = new Subject<Recipe>();
    ingredientAdded = new Subject<void>();
    toShoppingList(items :Ingredient[]) {
        this.ShoppingListService.addIngredients(items);
        this.ingredientAdded.next()
    }
}

import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    IngredientChange = new Subject<Ingredient[]>();
    startingEditing = new Subject<number>();
    private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
    getIngredient() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.IngredientChange.next(this.getIngredient());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.IngredientChange.next(this.getIngredient());
    }
    getIngredientbyIndex(index:number) {
        return this.ingredients[index];
    }
    updateIngredient(index:number , ingredient:Ingredient) {
        this.ingredients[index] = ingredient;
        this.IngredientChange.next(this.getIngredient());
    }
    deleteIngredient(index:number) {
        this.ingredients.splice(index, 1);
        this.IngredientChange.next(this.getIngredient());
    }

}
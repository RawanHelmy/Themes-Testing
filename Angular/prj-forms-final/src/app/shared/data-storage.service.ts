import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService{
    constructor(private httpClient: HttpClient , private RecipeService : RecipeService , private AuthService : AuthService) {
    }

    storeRecipes() {
        const recipe = this.RecipeService.getRecipes()
        this.httpClient.put(
            'https://recipeproject-d8343-default-rtdb.firebaseio.com/recipes.json',
            recipe).subscribe((res) => {
                console.log(res);
            });
    }
    getRecipes() {
        return this.httpClient.get<Recipe[]>(
            'https://recipeproject-d8343-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(res => {
                return res.map(recipe => { return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] } })
            }
            ), tap(res => {
                this.RecipeService.setRecipes(res);
            }))
    }

}
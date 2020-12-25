import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable()
export class RecipeResolverSerivce implements Resolve<Recipe[]>{
    constructor(private Store: DataStorageService , private RecipeService : RecipeService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        if (this.RecipeService.getRecipes().length > 0)
            return this.RecipeService.getRecipes();
         return this.Store.getRecipes();
    }
}
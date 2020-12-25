import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const AppRoutes: Routes = [
    { path: '', redirectTo: '/recipes' , pathMatch:'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipesEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent },
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
]
@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports:[RouterModule]
})
export class AppRoutesModule{
}
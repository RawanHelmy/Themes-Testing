import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  item: any;
  constructor(private recipeService : RecipeService , private route:ActivatedRoute , private router:Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.item = this.recipeService.getRecipebyindex(+data['id']);
    })
  }
  toShoppingList() {
    this.recipeService.toShoppingList(this.item.ingredients);
  }
  EditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}

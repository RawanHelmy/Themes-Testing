import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
})
export class RecipesEditComponent implements OnInit {
  id = 0;
  EditMode = false;
  form: FormGroup= new FormGroup({});
  
  constructor(private route: ActivatedRoute, private RecipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.EditMode = params['id'] != null;
      this.initForm()
    })
  }
  private initForm() {
    let recipename = '';
    let recipeDescription = '';
    let ImagePath = '';
    let Ingrdients = [];
    if (this.EditMode)
    {
      const recipe = this.RecipeService.getRecipebyindex(this.id);
      recipename = recipe.name;
      recipeDescription = recipe.description;
      ImagePath = recipe.imagePath;
      Ingrdients = recipe.ingredients;
    }
    this.form = new FormGroup({
      'name': new FormControl(recipename), 
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(ImagePath),

    })
  }
  onSubmit() {
    console.log(this.form.value)
  }
}

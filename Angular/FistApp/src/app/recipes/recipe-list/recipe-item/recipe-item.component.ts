import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('item') recipe: any;
  constructor(private RecipeService : RecipeService) { }

  ngOnInit(): void {
  }
}

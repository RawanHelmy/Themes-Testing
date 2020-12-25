import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f' , {static:false}) editForm : NgForm | undefined;
  editSubscription: Subscription = new Subscription;
  editingMode = false;
  index = 0;
  ingredient: Ingredient | undefined;
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.ShoppingListService.startingEditing.subscribe(
      (index:number) => {
        this.editingMode = true;
        this.index = index
        this.ingredient = this.ShoppingListService.getIngredientbyIndex(index);
        this.editForm?.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        })
      }
    )
  }
  addIngredient(Form :NgForm) {
    const newIngredint = new Ingredient(Form.value.name, Form.value.amount)
    if (this.editingMode) {
      this.ShoppingListService.updateIngredient(this.index, newIngredint)
    }
    else
      this.ShoppingListService.addIngredient(newIngredint);
    this.editingMode = false;
    this.editForm?.reset();
  }
  clearForm() {
    this.editingMode = false;
    this.editForm?.reset();
  }
  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
  onDelete() {
    this.ShoppingListService.deleteIngredient(this.index);
    this.clearForm();
  }
}

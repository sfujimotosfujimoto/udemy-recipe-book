import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Curry', 'Very tasty', 'http://bigoven-res.cloudinary.com/image/upload/t_recipe-256/thai-shrimp-curry-17.jpg', []),
    new Recipe('Sushi', 'Good!', 'http://english-master.info/img/sushi-1-icon.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}

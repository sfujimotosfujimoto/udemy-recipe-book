import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Curry', 'Very tasty', 'http://bigoven-res.cloudinary.com/image/upload/t_recipe-256/thai-shrimp-curry-17.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Fries', 1)
    ]),
    new Recipe('Sushi', 'Good!', 'http://english-master.info/img/sushi-1-icon.png', [
      new Ingredient('Squid', 4),
      new Ingredient('Rice', 5)
    ]),
    new Recipe('Takoyaki', 'The sauce!', 'http://jpninfo.com/wp-content/uploads/2015/09/takoyaki1.jpg', [
      new Ingredient('Octopus', 2),
      new Ingredient('Flour', 3)
    ]),
    new Recipe('Sukiyaki', 'Very good!', 'https://media-cdn.tripadvisor.com/media/photo-s/07/d4/75/61/tokyo-sukiyaki-tei.jpg', [
      new Ingredient('Beef', 2),
      new Ingredient('Sauce', 3)
    ])
  ];

  constructor() { }
  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}

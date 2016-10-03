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
    ])
  ];

  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}

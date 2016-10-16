import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Curry', 'Very tasty', '../../assets/images/curry.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Fries', 1)
    ]),
    new Recipe('Sushi', 'Good!', '../../assets/images/sushi.jpg', [
      new Ingredient('Squid', 4),
      new Ingredient('Rice', 5)
    ]),
    new Recipe('Takoyaki', 'The sauce!', '../../assets/images/takoyaki.jpg', [
      new Ingredient('Octopus', 2),
      new Ingredient('Flour', 3)
    ]),
    new Recipe('Sukiyaki', 'Very good!', '../../assets/images/sukiyaki.jpg', [
      new Ingredient('Beef', 2),
      new Ingredient('Sauce', 3)
    ])
  ];

  constructor(private http: Http) { }
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

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-book-dc64a.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipe-book-dc64a.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}

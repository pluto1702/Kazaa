import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
export class User {
  constructor(public recipes: Recipe[], public ingredients: Ingredient[]) {}
}

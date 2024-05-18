import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imgUrl: string,
    public ingredients: Ingredient[]
  ) {}
}

import { Injectable } from '@angular/core';
import { Recipe } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  recipe: Recipe = new Recipe()
}

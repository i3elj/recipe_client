import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/types';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}

  id: string | null = null;
  recipe: Recipe | null = null;

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id')
    let response = await fetch(`http://localhost:8080/api/recipe/${this.id}`)
    this.recipe = await response.json()
  }
}

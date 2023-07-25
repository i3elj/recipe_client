import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  recipes: Recipe[] = []

  async getRecipes() {
    let response = await fetch('http://localhost:8080/api/recipes')
    this.recipes = await response.json()
  }

  ngOnInit(): void {
    this.getRecipes()
  }
}

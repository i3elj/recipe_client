import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe, Ingredient } from 'src/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  recipes: Recipe[] = []
  name: string = ""
  ingredients: string = ""

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    let name = ""
    let ingredients = ""

    this.route.queryParams
      .subscribe(params => {
        name = params['name'] != undefined ? params['name'] : ''
        ingredients = params['ingredients'] != undefined ? params['ingredients'] : ''
      })

    let url = `http://localhost:8080/api/recipes?${name != '' ? "name=" + name : ''}${ingredients != '' ? "ingredients=" + ingredients : ''}`

    let response = await fetch(url)
    this.recipes = await response.json()
  }
}

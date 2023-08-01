import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/types';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements AfterViewInit {
  id: string | null = ""
  recipe: Recipe = new Recipe()
  response: Response = new Response()

  constructor(private route: ActivatedRoute, private location: Location) {}

  async ngAfterViewInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id')
    let response = await fetch(`http://localhost:8080/api/recipe/${this.id}`)

    switch (response.status) {
      case 404:
        let content = document.querySelector(".main-content-wrapper")
        if (content != null) content.innerHTML = "<h1>Not Found 404 :(</h1>"
        break

      default:
        this.recipe = await response.json()
    }

    let full_url = `http://localhost:8080/assets/${this.recipe.Image_url}`
    let element: HTMLImageElement | null = document.querySelector("#recipe_image")

    if (element != null)
      element.src = full_url
  }
}

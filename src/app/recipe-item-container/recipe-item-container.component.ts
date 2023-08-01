import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Recipe } from 'src/types';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item-container',
  templateUrl: './recipe-item-container.component.html',
  styleUrls: ['./recipe-item-container.component.css']
})
export class RecipeItemContainerComponent implements AfterViewInit {
  @Input() recipe: Recipe = new Recipe()

  ngAfterViewInit(): void {
    let full_url = `http://localhost:8080/assets/${this.recipe.Image_url}`
    let id_name = this.recipe.Image_url.split('.')[0]
    let element: HTMLElement | null = document.querySelector(`#${id_name}`)

    if (element != null) {
      element.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0), #dee5e8), url(${full_url}) no-repeat`
      element.style.backgroundSize = "cover"
      element.style.backgroundPosition = "center"
    }
  }
}

import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private location: Location) {}

  searchQuery: string | undefined = ""
  searchElement: HTMLInputElement | null = null
  @Input() shouldGoBack: string = "false"

  ngOnInit(): void {
    this.searchElement = document.querySelector("input[name='search']")

    this.searchElement?.addEventListener("change", () => {
      this.searchQuery = this.searchElement?.value
      console.log(this.searchQuery)
    })
  }

  goBack() {
    this.location.back()
  }
}

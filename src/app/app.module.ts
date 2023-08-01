import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    NotfoundComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

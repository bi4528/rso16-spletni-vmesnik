import { HttpClientModule } from '@angular/common/http';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CocktailService} from "./cocktail.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CocktailService
  ],
  declarations: [],
  bootstrap: []
})
export class AppModule { }

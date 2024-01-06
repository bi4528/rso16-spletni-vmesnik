import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  // private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  private apiUrl = 'http://localhost:8080/v1/koktejli/name/margarita';

  constructor(private http: HttpClient ) { }

  getCocktails(): Observable<{drinks: Cocktail[]}> {
    return this.http.get<{drinks: Cocktail[]}>(this.apiUrl);
  }
}

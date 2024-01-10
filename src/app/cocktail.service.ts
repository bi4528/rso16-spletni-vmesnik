import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Cocktail } from './cocktail.model';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  // private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  private apiUrl = 'http://34.89.140.13/koktejli/v1/koktejli/name/margarita';

  constructor(private http: HttpClient ) { }

  getCocktails(name?: string): Observable<{drinks: Cocktail[]}> {
    const url = name ? `${this.apiUrl}${name}` : this.apiUrl + 'margarita';
    return this.http.get<{drinks: Cocktail[]}>(url);
  }
}

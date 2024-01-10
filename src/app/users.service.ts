import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Cocktail} from "./cocktail.model";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/v1/seznam/users';

  constructor(private http: HttpClient ) { }

  getUsers(): Observable<string[]  | null> {
    return this.http.get<string[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of(null); // Za 404 greške vraća null
        }
        return throwError(error); // Za sve ostale greške baca grešku
      })
    );
  }
}

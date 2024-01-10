import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Cocktail} from "./cocktail.model";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/v1/seznam/users';

  constructor(private http: HttpClient ) { }

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl)
  }
}

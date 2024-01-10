import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Usercocktail } from './usercocktail.model';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsercocktailService {

  private apiUrl = 'http://localhost:8080/v1/seznam/user/';

  constructor(private http: HttpClient) { }

  getUsercocktails(user: string): Observable<Usercocktail[]> {
    return this.http.get<Usercocktail[]>(this.apiUrl + user)
  }
}

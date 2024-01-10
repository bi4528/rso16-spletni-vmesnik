import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SeznamMetadataRequest} from "./seznam-metada-request.model";

@Injectable({
  providedIn: 'root'
})
export class AddCocktailService {
  private apiUrl = 'http://localhost:8080/v1/seznam';

  constructor(private http: HttpClient) {}

  addCocktail(metadata: SeznamMetadataRequest): Observable<any> {
    return this.http.post(this.apiUrl, metadata);
  }
}

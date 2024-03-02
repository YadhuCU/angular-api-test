import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return this.http.get(this.url);
  }
}

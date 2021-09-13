import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  constructor(private http:HttpClient) { }

  url="http://localhost:9898/categorys/";
  
    categories(){
      return this.http.get(this.url,{observe: 'response', responseType: 'json'})
    }
  
}

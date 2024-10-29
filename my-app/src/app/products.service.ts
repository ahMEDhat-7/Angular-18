import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

export class ProductsService {

  constructor(private _httpClient:HttpClient) {
    
  }
  getPost() : Observable<any>{
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}

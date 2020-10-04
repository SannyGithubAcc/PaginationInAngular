import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  
  getpoststotal() {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getpostsPaged(currPage, pageSize) {
    return this.http.get<any[]>(`${this.baseUrl}/posts?_page=${currPage}&_limit=${pageSize}`);
  }
}

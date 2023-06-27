import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPost, ITheme } from './shared/interfaces';

const apiURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<ITheme[]>(`${apiURL}/themes`);
  }

  getTheme(id: string) {
    return this.http.get<ITheme>(`${apiURL}/themes/${id}`);
  }

  getPosts(limit?: number) {
    return this.http.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}

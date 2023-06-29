import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const apiURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<ITheme[]>(`${apiURL}/themes`);
  }

  getPosts(limit?: number) {
    return this.http.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
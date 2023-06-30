import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { IPost, ITheme } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<ITheme[]>('/api/themes');
  }

  getTheme(id: string) {
    return this.http.get<ITheme>(`/api/themes/${id}`);
  }

  postNewTheme(themeName: string, postText: string) {
    return this.http.post('/api/themes', { themeName, postText });
  }

  themeSubscribe(id: string) {
    return this.http.put(`/api/themes/${id}`, {});
  }

  getPosts(limit?: number) {
    return this.http.get<IPost[]>(`/api/posts${limit ? `?limit=${limit}` : ''}`);
  }

  addPost(postText: string, themeId: string) {
    return this.http.post(`/api/themes/${themeId}`, { postText });
  }
}

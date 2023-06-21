import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}

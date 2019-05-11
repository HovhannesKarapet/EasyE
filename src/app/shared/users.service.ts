import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  level = {};

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }
  postUsers(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
  patchLevel(id, level) {
    return this.http.patch(`http://localhost:3000/users/${id}`, {levels: level});
  }
  getLevel(id) {
    this.level = JSON.parse(localStorage.getItem('level'));
    return this.level['l' + id];
  }
}

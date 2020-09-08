import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private api: API // inject API class, xem như 1 property
  ) { }

  //chức năng login, post đến url của api và truyền vào tham số
  login(username:string, password:string){
    return this.api.post('/api/Account/login', {
      "username": username,
      "password": password
    });
  }

  setToken(token:string){
    return localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token')? localStorage.getItem('token'): sessionStorage.getItem('token');
  }
}

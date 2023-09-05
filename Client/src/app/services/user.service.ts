import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.API + 'users'); // Aquí agregamos la URL completa
  }

  getUserByPhone(userPhone: string): Observable<any> {
    return this.http.get(this.API + `users/${userPhone}`); // Aquí agregamos la URL completa
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.API + 'users', user); // Aquí agregamos la URL completa
  }

  updateUserByPhone(userPhone: string, user: any): Observable<any> {
    return this.http.put(this.API + `users/${userPhone}`, user); // Aquí agregamos la URL completa
  }

  deleteUserByPhone(userPhone: string): Observable<any> {
    return this.http.delete(this.API + `users/${userPhone}`); // Aquí agregamos la URL completa
  }
}

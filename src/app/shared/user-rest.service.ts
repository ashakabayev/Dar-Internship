import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Student } from '../students/students.types';
import { User } from '../models/User.types';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  hostback = 'http://localhost:3000'

  constructor(private http: HttpClient) {

  }
  createUser(data: User): Observable<User> {
    return this.http.post<User>(`${this.hostback}/users`, data);
  }
  auth(data: any) {
    return this.http.post(`${this.hostback}/users/auth`, data);
  }
}

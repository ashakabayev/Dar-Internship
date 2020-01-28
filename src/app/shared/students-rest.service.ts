import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../students/student.types';

@Injectable({
  providedIn: 'root'
})
export class StudentRestService {

  host = 'http://ca-api.witharts.kz';

  constructor(private http: HttpClient) {

  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.host}/students`);
  }

  createStudent(data: Student): Observable<any> {
    return this.http.post(`${this.host}/students`, data);
  }
}

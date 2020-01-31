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

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.host}/students/${id}`);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.host}/students`);
  }

  createStudent(data: Student): Observable<Student> {
    return this.http.post<Student>(`${this.host}/students`, data);
  }

  updateStudent(data: Student): Observable<Student> {
    console.log(data)
    return this.http.put<Student>(`${this.host}/students/${data.id}`, data);
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  newStudentFirstName = '';
  newStudentLastName = '';

  searchQuery = '';

  students: Student[] = [
    {
      id: 1,
      firstName: 'Miras',
      lastName: 'Magzom',
      score: 7.5,
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Snow',
      score: 8
    }
  ];

  studentsToShow: Student[] = [];
  constructor() { }

  ngOnInit() {
    this.studentsToShow = [...this.students];
  }

  addStudent() {
    if (this.newStudentFirstName && this.newStudentLastName) {
      this.students.push({
        id: this.students.length + 1,
        firstName: this.newStudentFirstName,
        lastName: this.newStudentLastName,
        score: 0,
      });
      this.newStudentFirstName = '';
      this.newStudentLastName = '';
    }
  }

  search() {
    if (!this.searchQuery) {
      this.studentsToShow = [...this.students];
    }
    this.studentsToShow = this.studentsToShow.filter(s => s.firstName.includes(this.searchQuery) || s.lastName.includes(this.searchQuery));
  }
}

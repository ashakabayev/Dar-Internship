import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { StudentRestService } from 'src/app/shared/students-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  searchQuery = '';

  students: Student[];

  studentsToShow: Student[] = [];
  constructor(
    private studentRestService: StudentRestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.studentRestService.getStudents()
      .subscribe(students => {
        this.students = students;
        this.studentsToShow = [...this.students];
      });
  }

  studentClicked(student: Student) {
    this.router.navigate(['students', 'student', student.id]);
  }

  search() {
    if (!this.searchQuery) {
      this.studentsToShow = [...this.students];
    }
    this.studentsToShow = this.studentsToShow.filter(s => s.firstName.includes(this.searchQuery) || s.lastName.includes(this.searchQuery));
  }
}

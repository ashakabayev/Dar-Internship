import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentRestService } from 'src/app/shared/students-rest.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  form: FormGroup;

  formSubmitted = false;

  searchQuery = '';

  students: Student[];

  studentsToShow: Student[] = [];
  constructor(private studentRestService: StudentRestService) { }

  ngOnInit() {
    this.studentRestService.getStudents()
      .subscribe(students => {
        this.students = students;
        this.studentsToShow = [...this.students];
      });
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  addStudent() {
    this.formSubmitted = true;

    if (!this.form.valid) {
      return;
    }

    const newStudent = {
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      score: 0,
    };

    this.studentRestService.createStudent(newStudent)
      .subscribe(res => {
        this.students.push(res);
        this.studentsToShow = [...this.students];
        this.formSubmitted = false;
        this.form.reset();
      });
  }

  search() {
    if (!this.searchQuery) {
      this.studentsToShow = [...this.students];
    }
    this.studentsToShow = this.studentsToShow.filter(s => s.firstName.includes(this.searchQuery) || s.lastName.includes(this.searchQuery));
  }
}

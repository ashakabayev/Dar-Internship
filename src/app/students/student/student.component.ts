import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { StudentRestService } from 'src/app/shared/students-rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student.types';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  form: FormGroup;

  formSubmitted = false;

  student: Student;

  constructor(
    private studentRestService: StudentRestService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      courses: new FormArray([]),
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.studentRestService.getStudent(params.id)
          .subscribe(student => {
            if (student) {
              this.student = student;
              this.form.patchValue(student);
              student.courses.forEach(course => {
                const constrols = this.form.get('courses') as FormArray;
                constrols.push(new FormGroup({
                  name: new FormControl(course.name, Validators.required),
                  startDate: new FormControl(course.startDate),
                }));
              });
            }
          });
      }
    });
  }

  addCourse() {
    const constrols = this.form.get('courses') as FormArray;
    constrols.push(new FormGroup({
      name: new FormControl('', Validators.required),
      startDate: new FormControl(''),
    }));
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
      courses: this.form.get('courses').value
    };

    if (this.student) {
      this.student = {...this.student, ...newStudent};
      this.studentRestService.updateStudent(this.student)
        .subscribe(res => {
          this.router.navigate(['students']);
        });
      return;
    }
    this.studentRestService.createStudent(newStudent)
      .subscribe(res => {
        this.router.navigate(['students']);
      });
  }

}

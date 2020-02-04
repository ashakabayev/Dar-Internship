import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Faculty } from '../faculty.types';
import { FacultyRestService } from 'src/app/shared/faculty-rest.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  form: FormGroup;

  formSubmitted = false;

  faculty: Faculty;

  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.facultyRestService.getFaculty(params.id)
          .subscribe(faculty => {
            if (faculty) {
              this.faculty = faculty;
              this.form.patchValue(faculty);
            }
          });
      }
    });
  }

  addFaculty() {
    this.formSubmitted = true;

    if (!this.form.valid) {
      return;
    }

    const newRecord = {
      name: this.form.get('name').value,
    };

    if (this.faculty) {
      this.faculty = {...this.faculty, ...newRecord};
      this.facultyRestService.updateFaculty(this.faculty)
        .subscribe(() => {
          this.router.navigate(['faculties']);
        });
      return;
    }
    this.facultyRestService.createFaculty(newRecord)
      .subscribe(() => {
        this.router.navigate(['faculties']);
      });
  }

}

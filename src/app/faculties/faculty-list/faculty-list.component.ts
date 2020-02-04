import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from '../faculty.types';
import { FacultyRestService } from 'src/app/shared/faculty-rest.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {

  searchQuery = '';

  faculties: Faculty[];

  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.facultyRestService.getFaculties()
      .subscribe(faculties => {
        this.faculties = faculties;
      });
  }

  itemClicked(faculty: Faculty) {
    this.router.navigate(['faculties', 'faculty', faculty.id]);
  }
}

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Faculty } from './faculty.types';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FacultyRestService } from '../shared/faculty-rest.service';

@Injectable()
export class FacultyResolver implements Resolve<Faculty> {

  constructor(private facultyRestService: FacultyRestService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Faculty> {
    return this.facultyRestService.getFaculty(route.paramMap.get('id'));
  }
}

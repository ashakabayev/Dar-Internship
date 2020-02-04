import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Faculty } from './faculty.types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultyRestService } from '../shared/faculty-rest.service';

@Injectable({ providedIn: 'root' })
export class FacultyResolver implements Resolve<Faculty> {

  constructor(private facultyRestService: FacultyRestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Faculty> {
      return this.facultyRestService.getFaculty(route.paramMap.get('id'));
  }
}

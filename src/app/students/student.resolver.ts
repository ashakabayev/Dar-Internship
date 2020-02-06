import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Student } from './student.types';
import { Injectable } from '@angular/core';
import { StudentRestService } from '../shared/students-rest.service';
import { Observable } from 'rxjs';

@Injectable()
export class StudentResolver implements Resolve<Student> {

  constructor(private studentRestService: StudentRestService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<Student> {
    return this.studentRestService.getStudent(route.paramMap.get('id'));
  }
}

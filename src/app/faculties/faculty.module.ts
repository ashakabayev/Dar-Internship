import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListItemComponent } from './faculty-list-item/faculty-list-item.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyResolver } from './faculty.resolver';

const routes: Routes = [
  { path: '', component: FacultyListComponent},
  {
    path: 'faculty/:id',
    component: FacultyComponent,
    resolve: {
      faculty: FacultyResolver
    }
  },
  { path: 'faculty', component: FacultyComponent},
];

@NgModule({
  declarations: [
    FacultyListComponent,
    FacultyComponent,
    FacultyListItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    FacultyResolver,
  ]
})
export class FacultyModule { }

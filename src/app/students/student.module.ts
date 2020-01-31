import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [StudentComponent]
})
export class AppRoutingModule {}


@NgModule({
  declarations: [
    StudentListComponent,
    StudentListItemComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentModule { }

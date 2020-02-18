import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'faculties',
        loadChildren: () =>
          import('./faculties/faculty.module').then(m => m.FacultyModule)
      },
      {
        path: 'students',
          loadChildren: () =>
            import('./students/student.module').then(m => m.StudentModule)
      },
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

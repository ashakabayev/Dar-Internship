import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRestService } from 'src/app/shared/user-rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private userRestService: UserRestService
) {}
  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  register() {
    if (this.form.invalid) {
      return;
    } else {
      const newUser = {

        firstName: this.form.get('firstName').value,
        lastName: this.form.get('lastName').value,
        username: this.form.get('login').value,
        password: this.form.get('password').value
      };
      this.userRestService.createUser(newUser)
      .subscribe(res => {
        // this.router.navigate(['students']);
        this.router.navigate(['/login']);
      });
    }
  }

}

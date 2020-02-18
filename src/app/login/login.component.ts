import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRestService } from 'src/app/shared/user-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  messages: string;
  constructor(
    private router: Router,
    private userRestService: UserRestService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (!this.form.valid) {
      this.messages = 'You have entered an invalid username or password';
      return;
    }
    const authUser = {
      username: this.form.get('login').value,
      password: this.form.get('password').value
    };
    this.userRestService.auth(authUser).subscribe(res => {
      console.log(res['token']);
      if (res[status] === 'error') {
        this.messages = 'You have entered an invalid username or password';
      }
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/']);
    });
  }
  logout() {
    localStorage.clear();
  }
    // this.router.navigate(['/']);
  // }
}

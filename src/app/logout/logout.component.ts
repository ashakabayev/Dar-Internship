import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}

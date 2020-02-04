import { Component, OnInit, Input } from '@angular/core';
import { Faculty } from '../faculty.types';

@Component({
  selector: 'app-faculty-list-item',
  templateUrl: './faculty-list-item.component.html',
  styleUrls: ['./faculty-list-item.component.scss']
})
export class FacultyListItemComponent implements OnInit {

  @Input() faculty: Faculty;

  constructor() { }

  ngOnInit() {
  }

}

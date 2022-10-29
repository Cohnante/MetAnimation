import { Component, OnInit } from '@angular/core';
import {title} from '../../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = title
  constructor() { }

  ngOnInit(): void {
  }

}

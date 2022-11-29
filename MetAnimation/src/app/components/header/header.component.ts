import { Component, OnInit } from '@angular/core';
import {title} from '../../app.component'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('back', [
      state('Transparent', style({
        backgroundColor: 'transparent',
        color:"white"
      })),
      state('dark', style({
        backdropFilter: 'blur(10px)',
        color:"white",
        zIndex: '20000',
      })),
      transition('Transparent => dark', [
        animate('.5s'),
      ]),
      transition('dark => clear', [
        animate('.5s'),
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  title = title
  Transparent:boolean = false;
  Scroll(){
    if(window.scrollY> window.innerHeight*0.02){
      this.Transparent = true;
    }
    else {
      this.Transparent = false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

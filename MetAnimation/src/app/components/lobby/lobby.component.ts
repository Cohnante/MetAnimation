import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, EffectFade, EffectFlip, Swiper,Virtual } from 'swiper';

SwiperCore.use([EffectCoverflow]);
SwiperCore.use([Virtual]);
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

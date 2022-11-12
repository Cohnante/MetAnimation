import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, SwiperOptions,Virtual, Navigation} from 'swiper';

SwiperCore.use([EffectCoverflow,Virtual,Navigation]);
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView:3,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 40,
      slideShadows: true,
    },
    navigation:true,
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}

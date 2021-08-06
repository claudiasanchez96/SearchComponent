import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {  Swiper, SwiperOptions } from 'swiper';
import { Cast } from '../../interface/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];
  constructor() { }

  ngOnInit(): void {

    /*console.log(this.cast);*/

  }
  ngAfterViewInit() {
    const swiperParams: SwiperOptions = {
      slidesPerView: 5.3,
      spaceBetween: 50,
      freeMode: true,
    };
    const swiper = new Swiper('.swiper-container', swiperParams);
}
}

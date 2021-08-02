import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera-response';
import Swiper from 'swiper';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public mySwiper: Swiper;

  constructor(){ }

  ngAfterViewInit(): any {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log('mov', this.movies);
    }

  onSlidePrev() {
    this.mySwiper.slidePrev();
  }


  onSlideNext() {
    this.mySwiper.slideNext();
  }
}

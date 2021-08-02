import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/cartelera-response';


@Component({
  selector: 'app-app-pelicula-poster-grid',
  templateUrl: './app-pelicula-poster-grid.component.html',
  styleUrls: ['./app-pelicula-poster-grid.component.css']
})
export class AppPeliculaPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.movies);

  }

}

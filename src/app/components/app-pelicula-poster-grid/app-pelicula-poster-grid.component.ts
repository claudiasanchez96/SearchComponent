import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/cartelera-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app-pelicula-poster-grid',
  templateUrl: './app-pelicula-poster-grid.component.html',
  styleUrls: ['./app-pelicula-poster-grid.component.css']
})
export class AppPeliculaPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
   // console.log(this.movies);

  }

  onMovieClick(movie: Movie) {
  this.router.navigate(['/peliculas', movie.id]);

  }

}

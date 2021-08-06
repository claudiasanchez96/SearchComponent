import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetails } from '../../interface/movie-response';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public movie: MovieDetails;
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {

  }

  ngOnInit(): void {
    /*llamar al servidor https://api.themoviedb.org/3/movie/299534?*/
    const id = this.activatedRoute.snapshot.params.id;
    this.peliculasService.getMovieDetails(id).subscribe(movie => {
      console.log(movie);
      this.movie = movie;

    });

  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetails } from '../../interface/movie-response';
import { Cast } from '../../interface/credits-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public movie: MovieDetails;
  public cast: Cast[] = [];
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService,
    private location: Location, private router: Router) {

  }

  ngOnInit(): void {
    /*llamar al servidor https://api.themoviedb.org/3/movie/299534?*/
    const id = this.activatedRoute.snapshot.params.id;
    this.peliculasService.getMovieDetails(id).subscribe(movie => {
      if (!movie) {
        this.router.navigateByUrl('/ home');
        return;
      }
      this.movie = movie;

    });

    this.peliculasService.getCast(id).subscribe(cast => {
      this.cast = cast.filter(actor => actor.profile_path !== null);

    });

  }

  onBack() {
    this.location.back();
  }


}

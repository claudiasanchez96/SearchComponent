import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public texto: string;
  public movies: Movie[] = [];
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.texto = params.texto;

      this.peliculasService.searchMovies(params.texto).subscribe(movies => {
        this.movies = movies;

      });
    });
  }

}

import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): any {
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (position > max) {
      // llamar el servicio
      console.log('cargando Api');

      if (this.peliculasService.cargando) { return; }

      this.peliculasService.getCartelera().subscribe(movies => {
        this.movies.push(...movies);
      });

    }

  }

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe((movies) => {
      console.log(movies);
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

}

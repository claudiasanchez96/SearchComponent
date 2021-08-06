import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interface/cartelera-response';
import { MovieDetails } from '../interface/movie-response';
import { Cast, CreditsResponse } from '../interface/credits-response';







@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params(): any {
    return {
      api_key: '74a837ff86744d6d873de55ac6562629',
      language: 'en-US',
      page: this.carteleraPage.toString(),
    };
  }

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      /*cargando peliculas*/
      return of([]);
    }
    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );

  }


  searchMovies(texto: string): Observable<Movie[]> {

    const params = { ...this.params, pages: '1', query: texto };
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map(resp => resp.results),


    );

  }

  getMovieDetails(id: number) {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    );
  }


  getCast(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([])),
    );
  }

}


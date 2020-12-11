import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  title: string;
  date: string;
  id: number;
}

export interface DetailedMovieInfo{
  title: string;
  plot: string;
  date: string;
  id: string;
  runtime: string;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'a8e2ebdd';

  movieList: Movie[];

  constructor(private http: HttpClient) { }

  public getMovies(): Movie[] {
    return this.movieList;
  }

  public getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.url}?i=${id}&apikey=${this.apiKey}`);
  }

  public getMoviesByTitle(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`);
  }
}

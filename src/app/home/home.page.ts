import { Component } from '@angular/core';
import { DataService, Movie } from '../services/data.service';
import { Observable } from 'rxjs';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  public movieList: Movie[];
  results: Observable<any>;
  public empty: boolean = true; 
  public errorMessage: string;


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMovies(): Movie[] {
    return this.data.getMovies();
  }

  filterList(evt) {
    if (evt !== "") {
      this.results = this.data.getMoviesByTitle(evt.srcElement.value);
      this.results.subscribe(data => {
        this.movieList = [];
        if(data['Response'] === 'True'){
          for (var m of data['Search']) {
            if (m["Type"] === "movie") {
              let movie: Movie =
              {
                title: m["Title"],
                date: m["Year"],
                id: m["imdbID"],
              }
              this.movieList.push(movie);
            }
            this.errorMessage = '';
          }
        }else{
          if(data['Error'] == "Incorrect IMDb ID."){
            this.empty = true;
          }else{
            this.errorMessage = data['Error'];
            this.empty = false;
          }
        }
      });;
    }
  }
}

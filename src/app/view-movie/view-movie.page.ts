import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService, DetailedMovieInfo, Movie } from '../services/data.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.page.html',
  styleUrls: ['./view-movie.page.scss'],
})
export class ViewMoviePage implements OnInit {
  public movie: DetailedMovieInfo;
  result: Observable<any>;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.result = this.data.getMovieById(id);
    this.result.subscribe(data => {
      let m: DetailedMovieInfo =
      {
        title: data["Title"],
        plot: data["Plot"],
        date: data["Year"],
        id: data["imdbID"],
        runtime: data["Runtime"],
        poster: data["Poster"]
      }
      console.log(m.title + ";" + m.plot);
      this.movie = m;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Movie List' : '';
  }
}

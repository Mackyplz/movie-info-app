import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMoviePage } from './view-movie.page';

import { IonicModule } from '@ionic/angular';

import { ViewMoviePageRoutingModule } from './view-movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMoviePageRoutingModule
  ],
  declarations: [ViewMoviePage]
})
export class ViewMoviePageModule {}

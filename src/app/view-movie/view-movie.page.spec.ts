import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMoviePageRoutingModule } from './view-movie-routing.module';

import { ViewMoviePage } from './view-movie.page';

describe('ViewMoviePage', () => {
  let component: ViewMoviePage;
  let fixture: ComponentFixture<ViewMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoviePage ],
      imports: [IonicModule.forRoot(), ViewMoviePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { AppPeliculaPosterGridComponent } from './app-pelicula-poster-grid/app-pelicula-poster-grid.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    AppPeliculaPosterGridComponent,
    CastSlideshowComponent,

  ],

  exports: [ NavbarComponent,
    SlideshowComponent,
    AppPeliculaPosterGridComponent,
    CastSlideshowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }

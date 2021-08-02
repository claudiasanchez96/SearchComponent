import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { AppPeliculaPosterGridComponent } from './app-pelicula-poster-grid/app-pelicula-poster-grid.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    AppPeliculaPosterGridComponent,

  ],

  exports: [ NavbarComponent,
    SlideshowComponent,
    AppPeliculaPosterGridComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }

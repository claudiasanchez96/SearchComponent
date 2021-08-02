import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PeliculasComponent,
    SearchComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

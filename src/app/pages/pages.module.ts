import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    PeliculasComponent,
    SearchComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }

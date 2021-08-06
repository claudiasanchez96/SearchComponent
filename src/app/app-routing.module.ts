import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },

  {
    path: 'search/:texto', component: SearchComponent,
  },

  {
    path: 'peliculas/:id', component: PeliculasComponent,
  },

  {
    path: '**', redirectTo: '/home',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

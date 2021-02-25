import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'inicio', component: HeroesComponent
  },
  {
    path: 'heroe/:id', component: HeroeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'inicio' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

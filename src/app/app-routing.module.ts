import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CricketComponent } from './cricket';
import { AboutComponent } from './about';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cricket', component: CricketComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

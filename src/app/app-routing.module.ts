import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScreenerComponent } from './screener/screener.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'screen', component: ScreenerComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

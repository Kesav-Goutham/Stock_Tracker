import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SentimentStockComponent } from './sentiment-stock/sentiment-stock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stock_tracker',
    pathMatch: 'full',
  },
  {
    path : 'stock_tracker',
    component : HomeComponent
  },

  {
    path : 'sentiment/:symbol',
    component : SentimentStockComponent

  }

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SentimentStockComponent } from './sentiment-stock/sentiment-stock.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SentimentStockComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

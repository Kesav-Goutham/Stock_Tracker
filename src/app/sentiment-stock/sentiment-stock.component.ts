import { Component, OnInit } from '@angular/core';
import { StockSentimentInsider } from '../stock-sentiment-insider';
import { StockDataService } from '../stock-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sentiment-stock',
  templateUrl: './sentiment-stock.component.html',
  styleUrls: ['./sentiment-stock.component.css']
})
export class SentimentStockComponent implements OnInit {
  Stock_symbol: string = '';
  Sentiment_info: Array<StockSentimentInsider> = [];
  symbl: string = '';

  constructor(private data_ser : StockDataService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(routeParams => {
      this.Stock_symbol = routeParams['symbol'];
      this.getSentiment_info();
    });
  }



getSentiment_info(){
  this.data_ser.getSentiment(this.Stock_symbol).subscribe((response:any)=>{
    this.Sentiment_info = response.data;
    this.symbl = response.symbol;
    this.Sentiment_info.forEach((element:StockSentimentInsider) => {
     element.t = Math.sign(Number(element.change));
    });
 })

}




}

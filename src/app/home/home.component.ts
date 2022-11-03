import { Component, OnInit, Pipe } from '@angular/core';
import { StockSymbolInfo } from '../stock-symbol-info';
import { StockInformation } from '../stock-information';
import { StockDataService } from '../stock-data.service';
import { StockInfo } from '../stock-info';
import { StockModels } from '../stock-models';
import { StockSymbolInformation } from '../stock-symbol-information';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

Search_symbol :"";
StockInformation: StockInfo= {
  displaySymbol: "",
  description: "",
  
  }
  stockSymbolData:StockSymbolInformation =  {
    c: '',
    o: '',
    h:'',
    dp:'',
    t:''
    
    } 

  stockInformationData : Array<StockModels>=[];
  stockDataInfo : Array<StockSymbolInformation>=[]
  constructor(private data_ser : StockDataService) { }

  ngOnInit(): void {
    let dataJson:any = localStorage.getItem('stockList');
    let data:any = JSON.parse(dataJson);
    if(data.stockList.length > 0){
      this.stockInformationData = data.stockList;
    }
 



}

Track_btn(){
  forkJoin(this.data_ser.get_symbol(this.Search_symbol),this.data_ser.get_symbol_info(this.Search_symbol)).subscribe((data: any) =>{
    this.StockInformation = data[0].result[0];
      this.stockSymbolData = data[1]
      this.stockInformationData.unshift({
        'Symbol': this.StockInformation.displaySymbol,
           'Description': this.StockInformation.description,
           'c': this.stockSymbolData.c,
           'o': this.stockSymbolData.o,
           'h':this.stockSymbolData.h,
           'p':this.stockSymbolData.dp,
           't': Math.sign(Number(this.stockSymbolData.t))
           
        
     })
     this.updateLocalStorage();
     console.log(this.StockInformation)
    
    
    })
  



};

closeItem(item:any,index:any){
  this.stockInformationData.splice(index,1);
  this.updateLocalStorage();
}

updateLocalStorage(){
  localStorage.setItem(
    'stockList',
    JSON.stringify({ stockList:  this.stockInformationData })
  );
}

 
   
}



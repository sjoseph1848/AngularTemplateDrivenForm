import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.scss']
})
export class ScreenerComponent implements OnInit {
  defaultMarketCap = "1000000";
  defaultBeta = "1"
  defaultVolume = "10000";
  defaultDividend = "0";
  defaultSector = "Technology";
  defaultIndustry = "Software";
  defaultExchange = "nyse";


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      let screenedStock = this.getScreenedStocks(form.value);
      screenedStock.subscribe(data => {
        console.log(data);
      })
    }
  }

  getScreenedStocks(screenData: any) {
    const data = screenData.screenData;
    console.log(data)
    let url = `https://nottingham-1848-slayer-robin.azurewebsites.net/api/screen/marketCap/${data.marketCap}/beta/${data.betaMin}/volumeMin/${data.volumeMin}/sector/${data.sector}/industry/None/exchange/${data.exchange}/dividendMin/${data.dividendMin}`;
    console.log(url);
    return this.http.get(url);
  }

}




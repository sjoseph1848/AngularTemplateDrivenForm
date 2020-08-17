import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

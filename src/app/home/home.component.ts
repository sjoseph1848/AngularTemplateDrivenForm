import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  originalStock = {
    stock: 'AAPL'
  }

  copiedStock = {
    ...this.originalStock
  };
  validStock: boolean = false;
  profileStock: any;
  isMoreInfo: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.isMoreInfo = false;
    if (form.valid) {
      const stock = this.getStockProfile(form.value.stock);
      stock.subscribe((data: any) => {
        this.profileStock = data[0];
        if (this.profileStock) {
          this.validStock = true;
        } else {
          this.validStock = false;
        }
      });
      console.log('in on Submit: ', form.valid);
      console.log('in on Submit: ', form.value.stock);

    }
  }

  getStockProfile(stock: string) {
    let url = `https://nottingham-1848-slayer-robin.azurewebsites.net/api/profile/${stock}`;
    return this.http.get(url);
  }

  getMoreStockInfo(stock: string) {
    this.isMoreInfo = true;
    console.log(stock);
  }


}

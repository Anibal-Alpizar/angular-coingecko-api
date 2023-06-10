import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  coins: Coin[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Coin[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.coins = res;
        },
        (err) => console.log(err)
      );
  }
}

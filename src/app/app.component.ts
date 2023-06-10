import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: Users[] = [];
  titles: string[] = ['id', 'name', 'username', 'email'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (res) => {
          console.log(res);
          this.users = res;
        },
        (err) => console.log(err)
      );
  }
}

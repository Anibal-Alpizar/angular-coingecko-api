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
  filterUsers: Users[] = [];
  titles: string[] = ['id', 'name', 'username', 'email'];

  searchText = '';

  constructor(private http: HttpClient) {}

  searchUser() {
    this.filterUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit() {
    this.http
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (res) => {
          console.log(res);
          this.users = res;
          this.filterUsers = res;
        },
        (err) => console.log(err)
      );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  validUsername: boolean = false;
  username: string = '';

  constructor() { }

  ngOnInit() {
  }

  checkUserLength() {
    this.validUsername = this.username.length > 0 ? true : false;
  }

  clearUsername() {
    this.username = '';
    this.validUsername = false;
  }
}

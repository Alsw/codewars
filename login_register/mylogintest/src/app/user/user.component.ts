import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private test: string;
  constructor(
    private userService: UserService
  ) {

    this.userService.currentUser.subscribe(data => {
      console.log(data);
      this.test = JSON.stringify(data);
    });

  }

  ngOnInit() {
  }

}

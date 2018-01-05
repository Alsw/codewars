import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel = new UserModel();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(data => {
      console.log(JSON.stringify(data) + 'ob');
    });
  }

  public doLogin() {
    this.userService.login(this.user);
    this.router.navigateByUrl('user');
  }

  public doLogout(): void {
    this.userService.logout();
    this.router.navigateByUrl('home');
  }
}

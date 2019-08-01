import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  login = (us, p) => {
    const user = {
      username: us,
      password: p
    };
    this.userService.login(user)
      .then(u => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}

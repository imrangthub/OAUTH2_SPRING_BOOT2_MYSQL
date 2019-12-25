import { Component, OnInit } from '@angular/core';
import { AuthService } from '../coreApp/auth-service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  constructor(
    private router: Router,
    private authService: AuthService,
    ) {}



  ngOnInit() {
    this.authService.checkIsLogin();
  }


  logout() {
    console.log("On click Logout");
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}

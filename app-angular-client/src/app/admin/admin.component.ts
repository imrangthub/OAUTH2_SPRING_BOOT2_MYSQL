import { Component, OnInit } from '@angular/core';
import { AuthService } from '../coreApp/auth-service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
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

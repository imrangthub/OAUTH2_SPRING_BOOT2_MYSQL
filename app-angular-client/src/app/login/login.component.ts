import { Component, OnInit } from '@angular/core';
import { AuthService } from '../coreApp/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData = {username: "", password: ""};
 
  constructor(
    private authService: AuthService
    ) {}

  login() {
    console.log("On click login");
    
     this.authService.obtainAccessToken(this.loginData);
  }

  ngOnInit() {
  }

}

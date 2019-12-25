import { Component, OnInit } from '@angular/core';
import { AppService } from '../coreApp/app-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData = {username: "", password: ""};
 
  constructor(
    private appService: AppService
    ) {}

  login() {
    console.log("On click login");
    
     this.appService.obtainAccessToken(this.loginData);
  }

  ngOnInit() {
  }

}

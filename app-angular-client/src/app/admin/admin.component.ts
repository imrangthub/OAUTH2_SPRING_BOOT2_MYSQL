import { Component, OnInit } from '@angular/core';
import { AppService } from '../coreApp/app-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  constructor(
    private appService: AppService
    ) {}

  logout() {
    console.log("On click Logout");
  }

  ngOnInit() {
    this.appService.checkCredentials();
  }

}

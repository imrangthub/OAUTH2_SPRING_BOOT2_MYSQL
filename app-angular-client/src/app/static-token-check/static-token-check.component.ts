

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../coreApp/home.service';
import { HttpReqWithStaticTokenService } from '../coreApp/httpreq-with-static-token.service';

@Component({
  selector: 'app-static-token-check',
  templateUrl: './static-token-check.component.html',
  styleUrls: ['./static-token-check.component.css']
})
export class StaticTokenCheckComponent implements OnInit {

  constructor(
    private httpReqWithStaticTokenService: HttpReqWithStaticTokenService
    
  ) { }

  ngOnInit() {
    
  }

  getHomeResourceWithGet(): void {
    this.httpReqWithStaticTokenService.getHomeResourceWithGet().subscribe(
      res => {
        console.log('getResource GET res: ',res);
      },
      err => {
        console.log("getResource error: ", err);
      }
    )
  }





  getHomeResourceWithPost(): void {
    this.httpReqWithStaticTokenService.getHomeResourceWithPost().subscribe(
      res => {
        console.log('getResource POST res: ',res);
      },
      err => {
        console.log("getResource error: ", err);
      }
    )
  }






}


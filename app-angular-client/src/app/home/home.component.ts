import { Component, OnInit } from '@angular/core';
import { HomeService } from '../coreApp/home.service';
import { HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService:HomeService
  ) { }

  ngOnInit() {

    this.getHomeResourceWithGet();

    this.getHomeResourceWithPost();


  }


  getHomeResourceWithPost(): void {
    this.homeService.getHomeResourceWithPost().subscribe(
      res => {
        console.log('getResource POST res: ',res);
      },
      err => {
        console.log("getResource error: ", err);
      }
    )
  }

  getHomeResourceWithGet(): void {
    this.homeService.getHomeResourceWithGet().subscribe(
      res => {
        console.log('getResource GET res: ',res);
      },
      err => {
        console.log("getResource error: ", err);
      }
    )
  }




}

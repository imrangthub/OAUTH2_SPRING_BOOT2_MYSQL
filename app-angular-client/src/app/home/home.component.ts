import { Component, OnInit } from '@angular/core';
import { HomeService } from '../coreApp/home.service';
import { HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpReqWithStaticTokenService } from '../coreApp/httpreq-with-static-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService:HomeService,
    private httpReqWithStaticTokenService: HttpReqWithStaticTokenService
    
  ) { }

  ngOnInit() {

  }


 




}

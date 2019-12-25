import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private CLIENT_ID = 'client';
    private PASSWORD = 'secret';
    private GRANT_TYPE = 'password';
    private AUTH_URL = 'http://localhost:8081/oauth/token';


    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) { }



    obtainAccessToken(loginData) {
        console.log('obtainAccessToken', loginData);

        let params = new HttpParams()
            .set('username', loginData.userName)
            .set('password', loginData.password)
            .set('grant_type', this.GRANT_TYPE)
            .set('client_id', this.CLIENT_ID);

        const headers = {
            'Authorization': 'Basic ' + btoa(`${this.CLIENT_ID}:${this.PASSWORD}`),
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        }

        this.httpClient.post<any>(this.AUTH_URL, params.toString(), { headers }).pipe(
            map(res => res))
            .subscribe(
                data => {
                    this.saveToken(data);
                },
                err => {
                    console.error("Credentials error ",err);
                    var errorMessage = navigator.onLine ? err.error.error_description : 'Please check your internet connection or try again later';
                    if(errorMessage === undefined){
                        errorMessage = "Service not available, please contact with Administrator";
                    }
                }
            );

        // let params = new URLSearchParams();
        // params.append('username',loginData.username);
        // params.append('password',loginData.password);    
        // params.append('grant_type','password');
        // params.append('client_id','fooClientIdPassword');

        console.log('obtainAccessToken params:', params);



        // let headers = 
        //   new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        //   'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});
        // let options = new RequestOptions({ headers: headers });

        // this.http.post('http://localhost:8081/spring-security-oauth-server/oauth/token', 
        //   params.toString(), options)
        //   .map(res => res.json())
        //   .subscribe(
        //     data => this.saveToken(data),
        //     err => alert('Invalid Credentials')); 


    }

    saveToken(token) {
        console.log('saveToken:',token);

        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        //Cookie.set("access_token", token.access_token, expireDate);
        this.router.navigate(['/']);
    }

    checkCredentials(): void {

        console.log('checkCredentials');
    }



}











// RAW JAVA_SCRIPT HTTP CALL

// periorJavaScript():void {
//     console.log(" periorJavaScript ");

//     const xhr = new XMLHttpRequest();
//    // xhr.open('GET', 'http://localhost:8080/home')
//     xhr.open('GET', 'http://localhost:8080/admin/per-write')
  
    
//     //xhr.setRequestHeader('Authorization', 'Bearer 999d69a0-4244-4d62-8179-0268f83b1f9b');
//     xhr.setRequestHeader('Authorization', 'Bearer 978d7a05-8493-430b-918d-c6d304c2e7d3');
//     xhr.setRequestHeader('Content-Type', 'application/json');
  
//     xhr.responseType = 'json';
//     xhr.onload = () => {
//       const resData = xhr.response;
//       console.log("get REQ RAW RES# ", resData);
//     }
  
//     xhr.send();
//   }
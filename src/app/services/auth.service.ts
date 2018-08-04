import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
res:any;

  constructor(private http: HttpClient,
    private cookieService: CookieService) {

  }  

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  getLogin(id:any, pwd:any){
    let toSend={
      id: id,
      pwd: pwd
    }
    return this.http.post<Config>('https://api.vishalpandey.xyz/login/',toSend, {responseType: 'json'});
  }

  

  logout(): void {
    // this.isLoggedIn = false;
    this.cookieService.delete('admin','/');
  }

  isLoggedInn(): boolean{
    if (this.cookieService.check("admin")) {
      return true;
    }else{
      return false;
    }
  }
}



export interface Config {
  key: string;
  value: string;
}

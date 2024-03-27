import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  baseUrl: String = 'http://localhost:3000/';
  constructor(private http: HttpClient, private router: Router) {}

  googleLogin():void {
    this.router.navigateByUrl(`http://localhost:3000/auth/google`)
    // return this.http.get(`http://localhost:3000/auth/google`);
  }
  facebookLogin(): Observable<any> {
    return this.http.get(`${this.baseUrl}auth/facebook`);
  }
  loginUser(reqUser: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/users/login`, reqUser);
  }
  registerUser(reqUser: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/users/signup`, reqUser);
  }
}

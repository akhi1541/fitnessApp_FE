import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  baseUrl: String = 'http://localhost:3000/api/v1/users';
  loginPath: String = 'login';
  registerPath: String = 'signup';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, private router: Router) {}
  loginUser(userData: any): Observable<any> {
    console.log('data', userData.value);
    const userDataStringified = JSON.stringify(userData.value);
    return this.http.post(
      `${this.baseUrl}/${this.loginPath}`,
      userDataStringified,
      this.httpOptions
    );
  }
  registerUser(userData: any): Observable<any> {
    console.log('data', userData.value);
    const userDataStringified = JSON.stringify(userData.value);
    return this.http.post(
      `${this.baseUrl}/${this.registerPath}`,
      userDataStringified,
      this.httpOptions
    );
  }

  googleLogin(): void {
    this.router.navigateByUrl(`http://localhost:3000/auth/google`);
    // return this.http.get(`http://localhost:3000/auth/google`);
  }
  facebookLogin(): Observable<any> {
    return this.http.get(`${this.baseUrl}auth/facebook`);
  }
}

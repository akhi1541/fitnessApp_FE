import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  googleIcon: any = faGoogle;
  facebookIcon: any = faFacebook;
  appleIcon: any = faApple;
  twitterIcon: any = faTwitter;
  googleUrl: String = 'http://localhost:3000/api/v1/users/auth/google';
  facebookUrl: String = 'http://localhost:3000/api/v1/users/auth/facebook';
  constructor(
    private authService: AuthServicesService,
    private http: HttpClient,
    private router: Router
  ) {}
  googleLogin(): void {
    // window.location.href = 'https://www.google.com/';
    this.http.get('http://localhost:3000/auth/google').subscribe((data) => {
      alert(data);
    });
  }

  facebookLogin() {
    this.authService.facebookLogin().subscribe((data) => {});
  }
  jwtLogin(data: any) {
    this.authService.loginUser(data).subscribe(() => {});
  }

  loginForm(loginFormData: any) {
    this.authService.loginUser(loginFormData).subscribe((data) => {
      console.log(data.token);
      const token = data.token;
      document.cookie = "jwt" + "=" +  token;
      this.router.navigate(['/home']);
    });
  }
}

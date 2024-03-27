import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  googleIcon: any = faGoogle;
  facebookIcon: any = faFacebook;
  constructor(
    private authService: AuthServicesService,
    private http: HttpClient
  ) {}
  googleLogin(): void {
    this.authService.googleLogin();
  }

  facebookLogin() {
    this.authService.facebookLogin().subscribe((data) => {});
  }
  jwtLogin(data: any) {
    this.authService.loginUser(data).subscribe(() => {});
  }
}

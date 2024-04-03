import { Component } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthServicesService,
    private router: Router
  ) {}
  onRegisterSubmit(registerForm: any) {
    console.log(registerForm);
    console.log(registerForm.value);

    registerForm.value['name'] =
      registerForm.value.First_Name + ' ' + registerForm.value.Last_Name;
    this.authService.registerUser(registerForm).subscribe((data) => {
      console.log(data.token);
      // document.cookie = "jwt" + "=" data.token;
      this.router.navigate(['/home']);
    });
  }
}

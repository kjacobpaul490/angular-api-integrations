import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  loginData: LoginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  showPassword = false;
  isLoading = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (this.isLoading) return;
    
    this.isLoading = true;
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', this.loginData);
      this.isLoading = false;
      
      // Here you would typically handle the actual login logic
      // For now, we'll just redirect to dashboard
      if (this.loginData.email && this.loginData.password) {
        // Redirect to dashboard after successful login
        this.router.navigate(['/pages/dashboard']);
      }
    }, 2000);
  }
}

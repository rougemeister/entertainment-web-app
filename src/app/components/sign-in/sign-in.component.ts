import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}

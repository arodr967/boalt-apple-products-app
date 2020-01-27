import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-home",
  template: `
    <div class="home-page" *ngIf="isAuthenticated">
      <div class="logo-container">
        <!--TODO: Find gray apple logo-->
        <img class="logo-container__img" src="../assets/apple-logo-white.png" />
      </div>

      <h1 class="title">Welcome to Apple</h1>
      <h2 class="sub-title">See our Products</h2>
    </div>

    <div class="home-page" *ngIf="!isAuthenticated">
      <app-register-form
        *ngIf="!showLoginForm && showSignupForm"
        (showLoginForm)="handleShowLoginForm($event)"
        (submitted)="handleRegisterFormSubmission($event)"
      ></app-register-form>
      <app-login-form
        *ngIf="showLoginForm && !showSignupForm"
        (showSignupForm)="handleShowSignupForm($event)"
        (submitted)="handleLoginFormSubmission($event)"
      ></app-login-form>
    </div>
  `,
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isAuthenticated = this.authService.isAuthenticated();

  showLoginForm = false;
  showSignupForm = !this.isAuthenticated;

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {}

  handleShowLoginForm(event: boolean) {
    this.showLoginForm = event;
    this.showSignupForm = !this.showSignupForm;
  }

  handleShowSignupForm(event: boolean) {
    this.showSignupForm = event;
    this.showLoginForm = !this.showLoginForm;
  }

  handleRegisterFormSubmission(event) {
    this.isAuthenticated = this.authService.registerUser(
      event.name,
      event.email,
      event.password
    );
  }
  handleLoginFormSubmission(event) {
    this.isAuthenticated = this.authService.authenticate(
      event.email,
      event.password
    );
  }
}

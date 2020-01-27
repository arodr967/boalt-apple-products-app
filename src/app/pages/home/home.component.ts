import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="home-page">
      <div *ngIf="!unauthorized">
        <div class="logo-container">
          <!--TODO: Find gray apple logo-->
          <img class="logo-container__img" src="../assets/apple-logo-white.png" />
        </div>

        <h1 class="title">Welcome to Apple</h1>
        <h2 class="sub-title">See our Products</h2>
      </div>

      <div *ngIf="unauthorized">
        <app-register-form
          *ngIf="!showLoginForm && showSignupForm"
          (showLoginForm)="handleShowLoginForm($event)"
        ></app-register-form>
        <app-login-form
          *ngIf="showLoginForm && !showSignupForm"
          (showSignupForm)="handleShowSignupForm($event)"
        ></app-login-form>
      </div>
    </div>
  `,
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  unauthorized = true;

  showLoginForm = false;
  showSignupForm = this.unauthorized;

  constructor() {}

  ngOnInit() {}

  handleShowLoginForm(event: boolean) {
    this.showLoginForm = event;
    this.showSignupForm = !this.showSignupForm;
  }

  handleShowSignupForm(event: boolean) {
    this.showSignupForm = event;
    this.showLoginForm = !this.showLoginForm;
  }
}

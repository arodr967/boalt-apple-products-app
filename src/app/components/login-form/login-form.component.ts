import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login-form",
  template: `
    <div class="form">
      <h1 class="form__title">Login</h1>
      <p class="form__sub-title">
        You must log in order to view the contents of this website.
      </p>
      <form class="form__content" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <p class="top-error" [hidden]="!loginForm?.invalid || !clickedSubmit">
          Something went wrong, please try again.
        </p>

        <div class="form__input">
          <label>
            Email:
            <input type="email" required email formControlName="email" />
          </label>
          <p class="inline-error" [hidden]="!email?.invalid || !clickedSubmit">
            Email must be a valid email address.
          </p>
        </div>

        <div class="form__input">
          <label>
            Password:
            <input
              type="password"
              required
              minlength="10"
              formControlName="password"
            />
          </label>
          <p
            class="inline-error"
            [hidden]="!password?.invalid || !clickedSubmit"
          >
            Password must be atleast 10 characters.
          </p>
        </div>

        <div>
          <button class="raised submit__button" type="submit">
            Log in
          </button>
          <button type="button" (click)="handleShowSignupForm()">
            I need to sign up
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  clickedSubmit = false;
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  @Output() submitted = new EventEmitter();
  @Output() showSignupForm = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // To only show the user an error when they have clicked submit
    this.clickedSubmit = true;

    // Send form value if form is valid
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }

  handleShowSignupForm() {
    this.showSignupForm.emit(true);
  }
}

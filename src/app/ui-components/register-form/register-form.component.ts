import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register-form",
  template: `
    <div class="form">
      <h1 class="form__title">Sign up</h1>
      <p class="form__sub-title"> 
        You must sign up in order to view the contents of this website.
      </p>
      <form class="form__content" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <p
          class="top-error"
          [hidden]="!registerForm?.invalid || !clickedSubmit"
        >
          Something went wrong, please try again.
        </p>

        <div class="form__input">
          <label>
            Name:
            <input type="text" required minlength="5" formControlName="name" />
          </label>
          <p class="inline-error" [hidden]="!name?.invalid || !clickedSubmit">
            Name must be atleast 5 characters.
          </p>
        </div>

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
            Sign up
          </button>
          <button type="button" (click)="handleShowLoginForm()">
            I already have an account
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  clickedSubmit = false;
  registerForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  get name() {
    return this.registerForm.get("name");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  @Output() submitted = new EventEmitter();
  @Output() showLoginForm = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // To only show the user an error when they have clicked submit
    this.clickedSubmit = true;

    // Send form value if form is valid
    if (this.registerForm.valid) {
      this.submitted.emit(this.registerForm.value);
    }
  }

  handleShowLoginForm() {
    this.showLoginForm.emit(true);
  }
}

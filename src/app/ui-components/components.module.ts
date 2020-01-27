import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Pages
import { MenuComponent } from "./menu/menu.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";

@NgModule({
  declarations: [MenuComponent, RegisterFormComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [MenuComponent, RegisterFormComponent, LoginFormComponent],
  providers: []
})
export class ComponentsModule {}

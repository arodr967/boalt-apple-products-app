import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Pages
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";


@NgModule({
  declarations: [HomeComponent, LandingComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  exports: [HomeComponent, LandingComponent],
  providers: []
})
export class PagesModule {}

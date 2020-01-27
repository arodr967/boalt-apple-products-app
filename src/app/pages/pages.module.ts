import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

// Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Pages
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";
import { ComponentsModule } from "../ui-components/components.module";
import { IphoneComponent } from './iphone/iphone.component';

@NgModule({
  declarations: [HomeComponent, LandingComponent, IphoneComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [HomeComponent, LandingComponent, IphoneComponent],
  providers: []
})
export class PagesModule {}

import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// UI Components
import { MenuComponent } from "./ui-components/menu/menu.component";

// Pages
import { PagesModule } from "./pages/pages.module";


@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

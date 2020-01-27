import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Pages
import { PagesModule } from "./pages/pages.module";

// Components
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    PagesModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

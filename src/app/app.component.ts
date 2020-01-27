import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

@Component({
  selector: "app-root",
  template: `
    <app-menu></app-menu>
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [
    trigger("routeAnimations", [
      transition("LandingPage <=> HomePage", [
        style({ position: "relative" }),
        query(".home-page", [style({ opacity: "20%" })]),
        query(".landing-page", animateChild()),
        group([
          query(".landing-page", [animate("1s ease-in", style({ opacity: "20%" }))]),
          query(".home-page", [animate("1s ease-in", style({ opacity: "20%" }))])
        ]),
        query(".home-page", animateChild())
      ]),
    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}

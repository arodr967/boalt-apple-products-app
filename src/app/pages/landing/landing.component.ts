import { Component, AfterViewInit, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-landing",
  template: `
    <div
      [@content]="started ? 'end' : 'start'"
      class="landing-page"
      routerLink="/home"
    >
      <div class="logo-container">
        <img class="logo-container__img" src="../assets/apple-logo-white.png" />
      </div>

      <h1 class="title">New Products Coming This Summer</h1>
      <h2 class="sub-title">2019</h2>
    </div>
  `,
  styleUrls: ["./landing.component.scss"],
  animations: [
    trigger("content", [
      state(
        "start",
        style({
          margin: "0px"
        })
      ),
      state(
        "end",
        style({
          margin: "5px 70px 0 70px"
        })
      ),
      transition("start => end", [animate("1s")]),
      transition("end => start", [animate("1s")])
    ])
  ]
})
export class LandingComponent implements AfterViewInit {
  started = false;
  isContentClicked$ = new BehaviorSubject(false);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngAfterViewInit() {
    // Timeout is used here to defer the following code in another
    // Javascript run, in order to prevent ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.started = !this.started;
    });
  }

  onContentClick() {
    this.router.navigate(["home"], { relativeTo: this.route });
    this.isContentClicked$.next(true);
  }
}

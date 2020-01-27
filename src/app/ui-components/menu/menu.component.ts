import {
  Component,
  OnChanges,
  AfterViewInit,
  Input,
  OnInit,
  OnDestroy
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Router, NavigationEnd } from "@angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-menu",
  template: `
    <div [class.menu]="isHomePage">
      <div
        [@initialMenu]="started ? 'end' : 'start'"
        [@productMenu]="isHomePage ? 'start' : 'end'"
        class="black-bar"
      >
        <div
          [@initialMenuLogo]="started ? 'end' : 'start'"
          class="logo-container"
        >
          <img class="logo-container__img" src="../assets/apple-logo-white.png" />
        </div>
      </div>
      <div [@buttonContainer]="isHomePage ? 'start': 'end'" *ngIf="isHomePage" class="button-container">
        <button>iPhone</button>
        <button>MacBook Pro</button>
        <button>Watch</button>
        <button class="raised">Notify me</button>
      </div>
    </div>
  `,
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("initialMenu", [
      state(
        "end",
        style({
          height: "70px"
        })
      ),
      state(
        "start",
        style({
          height: "8px"
        })
      ),
      transition("start => end", [animate("1s")]),
      transition("end => start", [animate("1s")])
    ]),
    trigger("initialMenuLogo", [
      state(
        "end",
        style({
          height: "30px"
        })
      ),
      state(
        "start",
        style({
          height: "8px"
        })
      ),
      transition("start => end", [animate("1s")]),
      transition("end => start", [animate("1s")])
    ]),
    trigger("productMenu", [
      state(
        "start",
        style({
          width: "70px",
          height: "70px"
        })
      ),
      state(
        "end",
        style({
          height: "70px"
        })
      ),
      transition("start => end", [animate("1s ease-out")]),
      transition("end => start", [animate("1s ease-out")])
    ]),

    trigger("buttonContainer", [
      state(
        "end",
        style({
          width: "70px",
          height: "70px"
        })
      ),
      state(
        "start",
        style({
          width: "calc(100% - 140px)",
          marginRight: "70px"
        })
      ),
      transition("start => end", [animate("1s ease-out")]),
      transition("end => start", [animate("1s ease-out")])
    ])
  ]
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  isHomePage = false;
  started = false;
  destroy$ = new Subject();

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        // Unsubcribe when the component is destroyed
        takeUntil(this.destroy$),
        // Get the url when navigation is complete
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => (this.isHomePage = e.url === "/home"));
  }

  ngAfterViewInit() {
    // Timeout is used here to defer the following code in another
    // Javascript run, in order to prevent ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.started = !this.started;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

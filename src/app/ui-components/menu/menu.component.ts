import { Component, OnChanges, AfterViewInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-menu",
  template: `
    <div
      [@initialMenu]="started ? 'end' : 'start'"
      [@productMenu]="isContentClicked ? 'start' : 'end'"
      class="top-bar"
    >
      <div
        [@initialMenuLogo]="started ? 'end' : 'start'"
        class="logo-container"
      >
        <img class="logo" src="../assets/apple-logo-white.png" />
      </div>
    </div>
  `,
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("initialMenu", [
      state(
        "end",
        style({
          height: "80px"
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
          height: "80px"
        })
      ),
      state(
        "end",
        style({
          height: "80px"
        })
      ),
      transition("start => end", [animate("1s")]),
      transition("end => start", [animate("0.5s")])
    ])
  ]
})
export class MenuComponent implements AfterViewInit {
  @Input() isContentClicked;

  started = false;

  ngAfterViewInit() {
    // Timeout is used here to defer the following code in another
    // Javascript run, in order to prevent ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.started = !this.started;
    });
  }
}

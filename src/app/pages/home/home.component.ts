import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="home-page">
      <div class="logo-container">
        <!--TODO: Find gray apple logo-->
        <img class="logo" src="../assets/apple-logo-white.png" />
      </div>

      <h1 class="title">Welcome to Apple</h1>
      <h2 class="sub-title">See our Products</h2>
    </div>
  `,
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

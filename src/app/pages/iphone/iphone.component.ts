import { Component, OnInit } from "@angular/core";

// The only purpose of this page is to show the functionality of the AuthGuard
@Component({
  selector: "app-iphone",
  template: `
    <div>You are authorized to view this page!</div>
  `,
  styleUrls: ["./iphone.component.scss"]
})
export class IphoneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

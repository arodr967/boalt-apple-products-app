import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { AuthGuardService as AuthGuard } from "./auth/auth-guard.service";
import { IphoneComponent } from "./pages/iphone/iphone.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    data: {
      animation: "LandingPage"
    }
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      animation: "HomePage"
    }
  },
  {
    path: "iphone",
    component: IphoneComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

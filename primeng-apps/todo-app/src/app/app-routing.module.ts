import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authRoutes} from "./auth/auth-routing.module";
import {BaseLayoutComponent} from "./layouts/base-layout/base-layout.component";

const routes: Routes = [
  {path: 'home', component: BaseLayoutComponent},
  {path:'**', redirectTo: 'signin'},
  ...authRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";

export const authRoutes: Routes = [
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

import {NgModule} from '@angular/core';
import {AuthRoutingModule} from "./auth-routing.module";
import {SigninComponent} from "./signin/signin.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

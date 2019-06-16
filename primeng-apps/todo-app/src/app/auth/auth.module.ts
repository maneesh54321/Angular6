import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";

import {AuthRoutingModule} from "./auth-routing.module";
import {SigninComponent} from "./signin/signin.component";
import {SharedModule} from "../shared/shared.module";
import {AuthReducer} from "./store/auth.reducer";

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', AuthReducer)
  ]
})
export class AuthModule { }

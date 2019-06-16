import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EffectsModule} from "@ngrx/effects";

import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from "primeng/menu";
import {MessageService, ProgressSpinnerModule} from "primeng/primeng";

import {SharedModule} from "./shared/shared.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from './app-routing.module';
import {BaseLayoutComponent} from './layouts/base-layout/base-layout.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {HeaderComponent} from './layouts/header/header.component';
import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {DashboardEffects} from "./dashboard/store/dashboard.effects";
import {ToastModule} from "primeng/toast";
import {appReducer} from "./store/app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    AuthModule,
    SharedModule,
    MenuModule,
    ToastModule,
    ProgressSpinnerModule,
    StoreModule.forRoot({'app':appReducer}),
    DashboardModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([DashboardEffects]),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SidebarModule} from 'primeng/sidebar';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AuthModule} from "./auth/auth.module";
import {HeaderComponent} from './layouts/header/header.component';
import {BaseLayoutComponent} from './layouts/base-layout/base-layout.component';
import {SharedModule} from "./shared/shared.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

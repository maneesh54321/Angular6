import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputSwitchModule, InputTextModule, PanelMenuModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }

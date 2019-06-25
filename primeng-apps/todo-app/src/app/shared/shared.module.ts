import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule }     from '@angular/common';

import { CardModule }                                                              from 'primeng/card';
import { ButtonModule }                                                            from 'primeng/button';
import { InputSwitchModule, InputTextModule, OverlayPanelModule, PanelMenuModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule }                                        from '@angular/forms';
import { MessageModule }                                                           from 'primeng/message';
import { MonthPickerComponent }                                                    from './month-picker/month-picker.component';


@NgModule({
  declarations: [MonthPickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    HttpClientModule,
    MessageModule,
    OverlayPanelModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    PanelMenuModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    HttpClientModule,
    MessageModule,
    MonthPickerComponent
  ]
})
export class SharedModule { }

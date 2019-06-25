import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel }                                                from 'primeng/primeng';
import { ControlValueAccessor, NG_VALUE_ACCESSOR }                     from '@angular/forms';

import * as moment from 'moment';

export const MONTH_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MonthPickerComponent),
  multi: true
};

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  providers:[MONTH_PICKER_VALUE_ACCESSOR]
})
export class MonthPickerComponent implements OnInit, ControlValueAccessor {
  months: string[];

  selectedDate: Date;

  @Input()
  dateFormat: string;

  @ViewChild('calendar') calendar: OverlayPanel;

  @ViewChild('inputfield') inputfieldViewChild: ElementRef;

  onModelChange: Function = (_: any) => {
  };

  onModelTouched: Function = () => {
  };

  disabled: boolean;

  constructor() {
    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  }

  ngOnInit(): void {
    if (!this.dateFormat) {
      this.dateFormat = 'MMM-yyyy';
    }
    this.selectedDate = new Date();
  }

  pickMonth(monthIndex: number) {
    this.selectedDate.setMonth(monthIndex);
    this.selectedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth());
    this.onModelChange(this.selectedDate);
    this.calendar.hide();
  }

  decrementYear() {
    this.selectedDate.setFullYear(this.selectedDate.getFullYear() - 1);
  }

  incrementYear() {
    this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if(obj){
      if (typeof obj === 'string') {
        this.selectedDate = this.parseValueFromString(obj);
      } else {
        this.selectedDate = obj;
      }
      this.updateInputField();
    }
  }

  updateInputField(): void {
    this.inputfieldViewChild.nativeElement.value = moment(this.selectedDate).format(this.dateFormat);
  }

  parseValueFromString(text: string): Date {
    if (!text || text.trim().length === 0) {
      return null;
    }
    return this.parseDate(text);
  }

  parseDate(text: string) : Date {
    return moment(text, this.dateFormat).toDate();
  }

}

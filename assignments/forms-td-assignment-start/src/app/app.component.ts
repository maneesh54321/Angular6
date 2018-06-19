import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') subForm:NgForm;
  defaultSubscription:string="advanced";

  onSubmit(){
    console.log(this.subForm);
  }
}

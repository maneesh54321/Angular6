import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None => no attribute in the template's selector and css selectors, Native=>same as default but used shadow tech, Emulated=>default behaviour
})
export class ServerElementComponent implements OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked , 
AfterViewInit, 
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('Constructor Called!');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges Called!', changes);
  }
  
  ngOnInit() {
    console.log('ngOnInit Called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!!');
  }

}
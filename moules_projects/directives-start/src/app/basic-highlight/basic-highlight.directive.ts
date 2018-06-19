import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
		selector:'[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green'; //this element may not be available when angular is not used in browser so it is not recommended to use this.
    }
}
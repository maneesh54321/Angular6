import { Directive, Renderer2, OnInit, ElementRef, HostListener, RendererStyleFlags2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  // @Input() defaultColor:string;
  @Input('appBetterHighlight') defaultColor:string; //In this case we are providing the same alias as directive name to defaultColor variable. So we can use this Directive as ' [appBetterHighlight]="'yellow'" '. For exactly same reason, we use ngClass as [ngClass]="{key:value}" because ngClass directive as some property with ngClass Alias name.
  @Input() highlightColor:string;
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elRef:ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue'); //OR
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue'); // for dynamic colors  OR
    // this.backgroundColor='blue'; //OR
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent'); // for dynamic colors  OR
    // this.backgroundColor='transparent'; //OR
    this.backgroundColor=this.defaultColor;
  }
}

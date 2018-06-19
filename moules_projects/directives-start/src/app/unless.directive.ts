import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // @Input() set unless(condition: boolean){  //wont work because when this directive converts the element into template and *appUnless gets converted to [appUnless]="condition", * get removed and appUnless will not be a valid property anymore. So this variable should have same name as directive for property binding.
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,private vcRef: ViewContainerRef) { }

}

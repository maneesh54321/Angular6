import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;

  // @ViewChild('nameInput') nameInput:ElementRef;
  // @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.subscription=this.slService.startedEditing.subscribe((index:number)=>{
      this.editMode=true;
      this.editedItemIndex=index;
      this.editedItem=this.slService.getIngredient(index);
      this.shoppingForm.setValue({
        'name':this.editedItem.name,
        'amount': this.editedItem.amount
      });
    });
  }

  onSubmit() {
    // const ingName=this.nameInput.nativeElement.value;
    // const amount=this.amountInput.nativeElement.value;
    const ingName = this.shoppingForm.value.name;
    const amount = this.shoppingForm.value.amount;
    const ingredient = new Ingredient(ingName, amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, ingredient);
    }else{
      this.slService.addIngredient(ingredient);
    }
    this.editMode=false;
    this.shoppingForm.reset();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear(){
    this.shoppingForm.reset();
    this.editMode=false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
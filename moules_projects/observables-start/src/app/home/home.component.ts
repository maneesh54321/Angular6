import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  numbersObservableSubscription: Subscription;
  myObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const numbers=interval(1000).pipe(map((data:number)=>{
      return data*2;
    }));
    this.numbersObservableSubscription=numbers.subscribe((num:number)=>{
      console.log(num);
    });

    // const myObservable= Observable.create(
    //   (observer:Observer<String>)=>{
    //     setTimeout(()=>{
    //       observer.next('First Package');
    //     },2000);
    //     setTimeout(()=>{
    //       observer.next('Second Package');
    //     },3000);
    //     setTimeout(()=>{
    //       observer.next('Third Package');
    //     },4000);
    //     setTimeout(()=>{
    //       observer.complete();
    //     },5000);
    //     // setTimeout(()=>{
    //     //   observer.error('Error occurred!');
    //     // },5000);
    //     setTimeout(()=>{    //this message will never be delievered if placed after error or completed state of observable.
    //       observer.next('Third Package');
    //     },6000);
    //   }
    // );

    // this.myObservableSubscription=myObservable.subscribe((message:string)=>console.log(message),
    // (error:string)=>console.log(error),
    // (completed)=>console.log('completed'));

  }

  ngOnDestroy(){
    // this.myObservableSubscription.unsubscribe();
    this.numbersObservableSubscription.unsubscribe();
  }

}

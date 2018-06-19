import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user: {id: number, name: string};
  private paramsSubscription: Subscription;

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    this.paramsSubscription=this.route.params.subscribe( //this route.params is observable  (different from route.snapshot.params)
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();  
    // this part is optional since angular handles it for us but its a good practice to destroy this 
    // because route.params is not component's property so when this component gets destroyed, 
    // the subscription is not removed from the route.params.
  }

}

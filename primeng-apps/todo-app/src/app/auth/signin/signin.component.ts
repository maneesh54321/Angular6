import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {GlobalState} from "../../model/globalState";
import {Router} from "@angular/router";

import * as fromAuth from '../store/auth.reducer';
import {loadingStart, loadingStop} from "../../store/app.actions";
import {trySignIn} from "../store/auth.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;

  _subscription: Subscription;

  constructor(private store: Store<GlobalState>, private router: Router) {
  }

  ngOnInit() {
    this._subscription = this.store.select<fromAuth.AuthState>('auth').subscribe(state => {
        if(state.authenticated && state.token){
        this.router.navigate(['home', 'dashboard'])
          .then(() => this.store.dispatch(loadingStop()));
      }
    });
    this.signInForm = new FormGroup({
      username: new FormControl('eve.holt@reqres.in', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  handleSignIn() {
    this.store.dispatch(loadingStart());
    this.store.dispatch(trySignIn(this.signInForm.getRawValue()));
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}

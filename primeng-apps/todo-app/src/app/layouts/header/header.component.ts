import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

import {MenuItem, MessageService} from "primeng/api";
import {GlobalState} from "../../model/globalState";
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';
import {changeTheme} from "../../store/app.actions";
import {signOut} from "../../auth/store/auth.actions";

declare var document;

enum THEME{
  DARK = 'dark',
  LIGHT = 'light'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  items: MenuItem[];

  _appSubscription: Subscription;

  _authSubscription: Subscription;

  _currentTheme: THEME;

  constructor(private router: Router,
              private store: Store<GlobalState>,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.items = [{
      label: 'My Profile',
      items: [
        {label: 'Edit Profile', icon: 'pi pi-fw pi-pencil'},
        {
          label: 'Sign Out',
          icon: 'pi pi-fw pi-sign-out',
          command: () => {
            this.store.dispatch(signOut());
          }
        }
      ]
    },
      {
        label: 'Settings',
        items: [
          {
            label: 'Switch Theme ',
            icon: 'pi pi-fw pi-eye',
            command: this.toggleTheme
          }
        ]
      }];
    this._appSubscription = this.store.select<fromApp.AppState>('app').subscribe(state => {
      if(this._currentTheme !== state.currentTheme){
        this._currentTheme = state.currentTheme;
        HeaderComponent.setTheme(this._currentTheme);
      }
    });
    this._authSubscription = this.store.select<fromAuth.AuthState>('auth').subscribe(state => {
      if(!state.authenticated){
        this.router.navigate(['/', 'signin']).then(() => {
          this.messageService.add({severity:'success', summary:'Success', detail:'Successfully Logged Out!!'});
        });
      }
    });
  }

  static setTheme(themeName) {
    document.getElementById('html-root').className = themeName;
  }

  toggleTheme = () => {
    if (this._currentTheme === THEME.LIGHT) {
      this.store.dispatch(changeTheme(THEME.DARK));
    } else {
      this.store.dispatch(changeTheme(THEME.LIGHT));
    }
  };

  ngOnDestroy(): void {
    this._appSubscription.unsubscribe();
    this._authSubscription.unsubscribe();
  }

}

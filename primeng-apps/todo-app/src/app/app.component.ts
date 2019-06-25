import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import { GlobalState }       from './model/globalState';
import { Observable }        from 'rxjs';

import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appState$: Observable<fromApp.AppState>;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit(): void {
    this.appState$ = this.store.select('app');
  }
}

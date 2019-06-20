import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

import {tryFetchWeatherForLocation} from "./store/dashboard.actions";
import {GlobalState} from "../model/globalState";
import * as fromDashboard from './store/dashboard.reducer';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  cityName: string;

  graphConfig: any = {
    single: [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      }
    ],
    multi: [],
    view: [700, 400],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    showXAxisLabel: true,
    xAxisLabel: 'Country',
    showYAxisLabel: true,
    yAxisLabel: 'Population',
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }
  };

  constructor(private store: Store<GlobalState>) {
    this.cityName = 'bengaluru';
  }

  ngOnInit() {
    this._subscription = this.store.select<fromDashboard.DashboardState>('dashboard')
      .subscribe((state: fromDashboard.DashboardState) => {
        console.log(state);
      });
    this.store.dispatch(AppActions.loadingStart());
    this.store.dispatch(tryFetchWeatherForLocation(this.cityName));
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}

import { NgModule }        from '@angular/core';
import { StoreModule }     from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardComponent } from './dashboard.component';
import { SharedModule }       from '../shared/shared.module';
import { dashboardReducer }   from './store/dashboard.reducer';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    NgxChartsModule
  ]
})
export class DashboardModule {
}

import * as fromAuth from "../auth/store/auth.reducer";
import * as fromDashboard from "../dashboard/store/dashboard.reducer";
import * as fromApp from "../store/app.reducer";

export interface GlobalState {
  auth: fromAuth.AuthState,
  dashboard: fromDashboard.DashboardState
  app: fromApp.AppState
}

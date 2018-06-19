import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes =[
    { path: '', component: HomeComponent },   //localhost:4200/users       //dont use '/users'
    { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent }
    ]},
    { path: 'servers',
      // canActivate: [AuthGuard], 
      canActivateChild:[AuthGuard], //this is applied to children of this route...it is another method inside AuthGuard service
      component: ServersComponent ,children:[
      { path: ':id', component: ServerComponent , resolve:{server:ServerResolver}},
      { path: ':id/edit', component: EditServerComponent , canDeactivate:[CanDeactivateGuard]}
    ]},
    // { path:'not-found',component:PageNotFoundComponent },
    { path:'not-found',component:ErrorPageComponent, data:{message: 'Page not found!!'} },
    { path: '**', redirectTo:'/not-found' } // This wildcard '**' matches all the urls so keep it at the end of all the routes else all the routes after this one can never be accessed
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash:true}) //hashtag routing,for old browsers not returning index.html...
        // default value of useHash is false so we dont need to pass in normal cases.
        // Tells the webserver that i only care about the part before '#'
    ],
    exports: [RouterModule] //exporting configured RouterModule. If we just import RouterModule on app.module.ts then it wont be configured. all the configurations are present here.
})
export class AppRoutingModule {}

// We are using this module because the main module was becoming too big. 
// And this way we have one separate file to manage all routes only.
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { AuthLoadGuard } from "../auth/auth-load-guard.service";

@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule, 
        AppRoutingModule
    ],
    providers:[ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard, AuthLoadGuard],
    exports:[
        AppRoutingModule,
        HeaderComponent,
        HomeComponent
    ]
})
export class CoreModule{}
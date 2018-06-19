import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Http, Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http: Http,
        private authService: AuthService,
        private recipeService:RecipeService){}

    storeRecipes(){
        const token=this.authService.getToken();
        return this.http.put('https://ng-recipe-book-47db1.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }

    getRecipes(){
        const token=this.authService.getToken();
        this.http.get('https://ng-recipe-book-47db1.firebaseio.com/recipes.json?auth='+token).pipe(map(
            (response: Response)=>{
                console.log(response);
                const recipes:Recipe[]=response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        )).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
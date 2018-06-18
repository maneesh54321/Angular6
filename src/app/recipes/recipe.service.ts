import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private _recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    public getRecipes() {
        return this._recipes.slice();
    }

    public setRecipes(newRecipes: Recipe[]){
        this._recipes=newRecipes;
        this.recipeChanged.next(this._recipes.slice());
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    public getRecipeAtIndex(index: number) {
        return this._recipes[index];
    }

    public get recipes() {
        return this._recipes;
    }

    public addRecipe(recipe: Recipe) {
        this._recipes.push(recipe);
        this.recipeChanged.next(this._recipes.slice());
    }

    public updateRecipe(index: number, newRecipe: Recipe) {
        this._recipes[index] = newRecipe;
        this.recipeChanged.next(this._recipes.slice());
    }

    public deleteRecipe(index: number) {
        this._recipes.splice(index, 1);
        this.recipeChanged.next(this._recipes.slice());
    }
}
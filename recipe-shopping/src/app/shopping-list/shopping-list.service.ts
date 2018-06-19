import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private _ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.next(this._ingredients.slice());
    }

    public getIngredients() {
        return this._ingredients.slice();
    }

    public getIngredient(index:number){
        return this.ingredients[index];
    }

    public addIngredients(ingredients: Ingredient[]) {
        this._ingredients.push(...ingredients);
        this.ingredientsChanged.next(this._ingredients.slice());
    }

    public updateIngredient(index:number, newIngredient:Ingredient){
        this._ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this._ingredients.slice());
    }

    public deleteIngredient(index:number){
        this._ingredients.splice(index,1);
        this.ingredientsChanged.next(this._ingredients.slice());
    }

    public get ingredients() {
        return this._ingredients;
    }
}
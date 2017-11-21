import { Category } from './category';
import { User } from './user';

export class Recipe {
    id?: number;
    author: any;
    category: Category | number;
    ingredients: Array<Ingredient>;
    views: number;
    name: string;
    description: string;
    ready_in_time: number;
    portions: number;
    cooking_method: string;
    nutritional_info: string;
    instructions: string;

    constructor() {
        this.author = new User();
        this.category = {
            id: 0,
            name: '',
            subtitle: ''
        };
        this.ingredients = [];
        this.views = 0;
        this.name = '';
        this.description = '';
        this.ready_in_time = 0;
        this.portions = 0;
        this.cooking_method = '';
        this.nutritional_info = '';
        this.instructions = '';
    }
}


export interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}

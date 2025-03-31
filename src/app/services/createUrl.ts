import type { IAutocompleteParams, IRequestParams, IRequestRecipe } from '../types/storeTypes/requestTypes.ts';
import { apiMethod } from './api/methods.ts';

const API_KEY = import.meta.env.VITE_API_KEY;

export const createUrl = (params: IRequestParams | IRequestRecipe | IAutocompleteParams, 
                          method: string,
                          id?: number, ): string => {
    let url: string = '';
    switch (method) {
        case (apiMethod.AUTOCOMPLETE_METHOD): {
            url += apiMethod.AUTOCOMPLETE_METHOD;
            break;
        }
        case (apiMethod.SELECTED_RECIPE_METHOD): {
            url += `${id}${apiMethod.SELECTED_RECIPE_METHOD}`;
            break;
        } 
        default: {
            url += apiMethod.RECIPES_METHOD;
            break;
        }
    }
    url += `apiKey=${API_KEY}`;
    if (params) {
        const entries = Object.entries(params);
        entries.forEach(([key, value]) => {
            if (value) url += `&${key}=${value}`;
        });
    }
    return url;
};

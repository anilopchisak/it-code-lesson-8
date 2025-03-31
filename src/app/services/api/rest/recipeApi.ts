import type { IAutocomplete, IRecipeFull, IRecipes } from '../../../types/storeTypes/recipeType.ts';
import api from '../axios.ts';

const fetchApi = async (url: string): Promise<IRecipes | IRecipeFull | undefined> => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error: any) {
        // Запрос был сделан, и сервер ответил кодом состояния, который
        // выходит за пределы 2xx
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        }
        // Запрос был сделан, но ответ не получен
        else if (error.request) {
            console.error(error.request);
        }
        // Произошло что-то при настройке запроса, вызвавшее ошибку
        else {
            console.error('Fetch error:', error.message);
        }
        throw error;
    }
}

export const fetchRecipesHandler = async (url: string): Promise<IRecipes | undefined> => {
    try {
        const data = await fetchApi(url);
        return data as IRecipes | undefined;
    } catch (error) {
        throw error;
    }
}

export const fetchSelectedRecipeHandler = async (url: string): Promise<IRecipeFull | undefined> => {
    try {
        const data = await fetchApi(url);
        return data as IRecipeFull | undefined;
    } catch(error) {
        throw error;
    }
}

export const fetchAutocompleteHandler = async (url: string): Promise<IAutocomplete[] | undefined> => {
    try {
        const data = await fetchApi(url);
        return data as IAutocomplete[] | undefined;
    } catch(error) {
        throw error;
    }
}

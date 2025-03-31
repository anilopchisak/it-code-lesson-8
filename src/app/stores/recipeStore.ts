import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { fetchAutocompleteHandler, fetchRecipesHandler, fetchSelectedRecipeHandler } from '../services/api/rest/recipeApi.ts';
import { createUrl } from '../services/createUrl.ts';
import { apiMethod } from '../services/api/methods.ts';
import { type IAutocompleteParams, type IRequestParams, type IRequestRecipe, type cuisineType, type dietType, type intoleranceType, loadingStatus, type mealType, sortDirectionType, sortType, sortTypeDisplay } from '../types/storeTypes/requestTypes.ts';
import type { IRecipeFull, IRecipes, IAutocomplete } from '../types/storeTypes/recipeType.ts';

export const useRecipeStore = defineStore('recipeStore', () => {
    // отслеживание статуса загрузки данных
    const selectedRecipeLoadingStatus = ref<loadingStatus>(loadingStatus.Idle);
    const recipesLoadingStatus = ref<loadingStatus>(loadingStatus.Idle);
    const autocompleteLoadingStatus = ref<loadingStatus>(loadingStatus.Idle);
    // список рецептов
    const recipes = ref<IRecipes | null | undefined>(null);
    // рецепт по id
    const selectedRecipe = ref<IRecipeFull | null | undefined>(null);
    // autocomplete search
    const autocomplete = ref<IAutocomplete[] | null>(null);
    // параметры запроса сортировки
    const searchParams = ref<IRequestParams>({
        query: null,
        offset: 0,
        number: 10,
        addRecipeInformation: true,
        cuisine: null,
        diet: null,
        intolerance: null,
        type: null,
        sort: null,
        sortDirection: null,
    });
    // параметры запроса рецепта по id
    const selectedRecipeParams = ref<IRequestRecipe>({
        addWinePairing: true,
        analyzedInstructions: true,
    });
    // параметры запроса autocomplete search
    const autocompleteParams = ref<IAutocompleteParams>({
        query: null,
        number: 5,
    });

    function $reset() {
        searchParams.value.offset = 0;
    }
    const resetSearchParams = () => {
        setQuery(null);
        $reset();
        setCuisine(null);
        setDiet(null);
        setIntolerance(null);
        setType(null);
        setSort(null);
        setSortDirection(null);
    }

    const getRecipes = computed(() => recipes.value);
    const getSelectedRecipe = computed(() => selectedRecipe.value);
    const getAutocomplete = computed(() => autocomplete.value);
    
    const getCuisine = computed(() => searchParams.value.cuisine);
    const getDiet = computed(() => searchParams.value.diet);
    const getType = computed(() => searchParams.value.type);
    const getIntolerance = computed(() => searchParams.value.intolerance);

    const setRecipes = (data: IRecipes | undefined | null): void => {
        if (searchParams.value.offset !== 0) {
            data?.results.forEach((item) => 
                recipes.value?.results.push(item)); 
        }
        else {
            recipes.value = data;
        }
    }
    const setSelectedRecipe = (data: IRecipeFull | undefined | null): void => {
        selectedRecipe.value = data;
    }

    const setQuery = (data: string | null): void => {
        searchParams.value.query = data;
    }
    const setCuisine = (data: cuisineType[] | null): void => {
        searchParams.value.cuisine = data;
    }
    const setDiet = (data: dietType[] | null): void => {
        searchParams.value.diet = data;
    }
    const setIntolerance = (data: intoleranceType[] | null): void => {
        searchParams.value.intolerance = data;
    }
    const setType = (data: mealType[] | null): void => {
        searchParams.value.type = data;
    }
    const setSort = (data: sortType | null): void => {
        searchParams.value.sort = data;
    }
    const setSortDirection = (data: sortDirectionType | null): void => {
        searchParams.value.sortDirection = data;
    }
    const setSortParams = (data: sortTypeDisplay | null): void => {
        switch(data) {
            case sortTypeDisplay.maxTime: {
                setSort(sortType.time);
                setSortDirection(sortDirectionType.desc);
                break;
            }
            case sortTypeDisplay.minTime: {
                setSort(sortType.time);
                setSortDirection(sortDirectionType.asc);
                break;
            }
            case sortTypeDisplay.popularity: {
                setSort(sortType.popularity);
                setSortDirection(sortDirectionType.asc);
                break;
            }
            default: {
                setSort(null);
                setSortDirection(null);
                break;
            }
        }
    }
    const setAutocomplete = (data: IAutocomplete[] | null) => {
        autocomplete.value = data;
    }
    const setAutocompleteParams = (data: string | null): void => {
        autocompleteParams.value.query = data;
    }
    // infinite scroll
    const increaseOffset = (): void => {
        searchParams.value.offset += 10;
    }
    // запросы
    const fetchRecipes = async (): Promise<void> => {
        recipesLoadingStatus.value = loadingStatus.Loading;
        console.log(searchParams.value);
        const url = createUrl(searchParams.value, apiMethod.RECIPES_METHOD);
        try {
            const data = await fetchRecipesHandler(url);
            if (data?.results.length !== 0) {
                setRecipes(data);
                recipesLoadingStatus.value = loadingStatus.Success;
            }
            else {
                setRecipes(null);
                recipesLoadingStatus.value = loadingStatus.NotFound;
            }
        } catch (error) {
            recipesLoadingStatus.value = loadingStatus.Error;
        }
    }

    const fetchSelectedRecipe = async (id: number): Promise<void> => {
        selectedRecipeLoadingStatus.value = loadingStatus.Loading;
        const url = createUrl(selectedRecipeParams.value, apiMethod.SELECTED_RECIPE_METHOD, id);
        try {
            const data = await fetchSelectedRecipeHandler(url);
            if (data) {
                setSelectedRecipe(data);
                selectedRecipeLoadingStatus.value = loadingStatus.Success;
            }
            else {
                setSelectedRecipe(null);
                selectedRecipeLoadingStatus.value = loadingStatus.NotFound;
            }
        } catch (error) {
            selectedRecipeLoadingStatus.value = loadingStatus.Error;
        }
    }

    const fetchAutocomplete = async (): Promise<void> => {
        autocompleteLoadingStatus.value = loadingStatus.Loading;
        const url = createUrl(autocompleteParams.value, apiMethod.AUTOCOMPLETE_METHOD);
        try {
            const data = await fetchAutocompleteHandler(url);
            if (data) {
                setAutocomplete(data);
                autocompleteLoadingStatus.value = loadingStatus.Success;
            }
            else {
                setAutocomplete(null);
                autocompleteLoadingStatus.value = loadingStatus.NotFound;
            }
        } catch (error) {
            autocompleteLoadingStatus.value = loadingStatus.Error;
        }
    }

    return {
        searchParams,
        selectedRecipeParams,
        setCuisine,
        setDiet,
        setIntolerance,
        setQuery,
        setRecipes,
        setSelectedRecipe,
        setSortParams,
        setType,
        setAutocompleteParams,
        getRecipes,
        getSelectedRecipe,
        getAutocomplete,
        getCuisine,
        getDiet,
        getIntolerance,
        getType,
        fetchRecipes,
        fetchSelectedRecipe,
        fetchAutocomplete,
        recipes,
        selectedRecipe,
        selectedRecipeLoadingStatus,
        recipesLoadingStatus,
        $reset,
        increaseOffset,
        resetSearchParams
    };
});

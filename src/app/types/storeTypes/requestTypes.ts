export enum loadingStatus {
    Idle = 'Idle',
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
    NotFound = 'Not found'
}

export enum sortType {
    popularity = 'popularity',
    time = 'time'
}

export enum sortDirectionType {
    asc = 'asc',
    desc = 'desc'
}

export enum sortTypeDisplay {
    popularity = 'Popularity',
    minTime = 'Quick and easy',
    maxTime = 'Complex recipes'
}

export enum cuisineType {
    African = 'African',
    Asian = 'Asian',
    American = 'American',
    British = 'British',
    Cajun = 'Cajun',
    Caribbean = 'Caribbean',
    Chinese = 'Chinese',
    EasternEuropean = 'Eastern European',
    European = 'European',
    French = 'French',
    German = 'German',
    Greek = 'Greek',
    Indian = 'Indian',
    Irish = 'Irish',
    Italian = 'Italian',
    Japanese = 'Japanese',
    Jewish = 'Jewish',
    Korean = 'Korean',
    LatinAmerican = 'Latin American',
    Mediterranean = 'Mediterranean',
    Mexican = 'Mexican',
    MiddleEastern = 'Middle Eastern',
    Nordic = 'Nordic',
    Southern = 'Southern',
    Spanish = 'Spanish',
    Thai = 'Thai',
    Vietnamese = 'Vietnamese',
}

export enum dietType {
    GlutenFree = "Gluten Free",
    Ketogenic = "Ketogenic",
    Vegetarian = "Vegetarian",
    LactoVegetarian = "Lacto Vegetarian",
    OvoVegetarian = "Ovo Vegetarian",
    Vegan = "Vegan",
    Pescetarian = "Pescetarian",
    Paleo = "Paleo",
    Primal = "Primal",
    LowFODMAP = "Low FODMAP",
    Whole30 = "Whole30"
}

export enum intoleranceType {
    Dairy = "Dairy",
    Egg = "Egg",
    Gluten = "Gluten",
    Grain = "Grain",
    Peanut = "Peanut",
    Seafood = "Seafood",
    Sesame = "Sesame",
    Shellfish = "Shellfish",
    Soy = "Soy",
    Sulfite = "Sulfite",
    TreeNut = "Tree Nut",
    Wheat = "Wheat",
}

export enum mealType {
    MainCourse = 'Main Course',
    SideDish = 'Side Dish',
    Dessert = 'Dessert',
    Appetizer = 'Appetizer',
    Salad = 'Salad',
    Bread = 'Bread',
    Breakfast = 'Breakfast',
    Soup = 'Soup',
    Beverage = 'Beverage',
    Sauce = 'Sauce',
    Marinade = 'Marinade',
    FingerFood = 'Finger Food',
    Snack = 'Snack',
    Drink = 'Drink',
}


export interface IRequestParams extends IFilterParams, ISortParams {
    query: string | null,
    offset: number | 0,
    number: number | 10,
    addRecipeInformation: boolean,
}

interface IFilterParams {
    cuisine: cuisineType[] | null,
    diet: dietType[] | null,
    intolerance: intoleranceType[] | null,
    type: mealType[] | null
}

interface ISortParams {
    sort: sortType | null,
    sortDirection: sortDirectionType | null,
}

export interface IRequestRecipe {
    addWinePairing: boolean,
    analyzedInstructions: boolean,
}

export interface IAutocompleteParams {
    query: string | null,
    number: number,
}

export interface IAutocomplete {
    id: number,
    title: string, 
    imageType: string,
}

export interface IRecipeShort extends IAutocomplete {
    image: string, 
}

export interface IRecipes {
    offset: number,
    number: number,
    results: IRecipeShort[] | IRecipeFull[],
    totalResults: number,
}

interface ITemperature {
    number: number,
    unit: string,
}
  
interface IEquipment {
    id: number,
    image: string,
    name: string,
    temperature?: ITemperature,
}
  
interface IIngredient {
    id: number,
    image: string,
    name: string,
}
  
interface ILength {
    number: number,
    unit: string,
}
  
export interface IStep {
    equipment: IEquipment[],
    ingredients: IIngredient[],
    number: number,
    step: string,
    length?: ILength,
}

export interface IAnalyzedInstructions {
    name: string,
    steps: IStep[],
}

interface IMeasure {
    amount: number,
    unitLong: string,
    unitShort: string,
}
  
interface IMeasures {
    metric: IMeasure,
    us: IMeasure,
}
  
export interface IExtendedIngredient {
    aisle: string,
    amount: number,
    consistency: string,
    id: number,
    image: string,
    measures: IMeasures,
    meta: string[],
    name: string,
    nameClean: string,
    original: string,
    originalName: string,
    unit: string,
}
  
export interface IProductMatch {
    id: number,
    title: string,
    description: string,
    price: string,
    imageUrl: string,
    averageRating: number,
    ratingCount: number,
    score: number,
    link: string,
}
  
export interface IWinePairing {
    pairedWines: string[],
    pairingText: string,
    productMatches: IProductMatch[],
}
  
export interface IRecipeFull extends IRecipeShort {
    servings?: number,
    readyInMinutes?: number,
    cookingMinutes?: number,
    preparationMinutes?: number,
    license?: string,
    sourceName?: string,
    sourceUrl?: string,
    spoonacularSourceUrl?: string,
    healthScore?: number,
    spoonacularScore?: number,
    pricePerServing?: number,
    aggregateLikes?: number,
    analyzedInstructions?: IAnalyzedInstructions[],
    cheap?: boolean,
    creditsText?: string,
    cuisines?: string[],
    dairyFree?: boolean,
    diets?: string[],
    gaps?: string,
    glutenFree?: boolean,
    instructions?: string,
    ketogenic?: boolean,
    lowFodmap?: boolean,
    occasions?: string[],
    sustainable?: boolean,
    vegan?: boolean,
    vegetarian?: boolean,
    veryHealthy?: boolean,
    veryPopular?: boolean,
    whole30?: boolean,
    weightWatcherSmartPoints?: number,
    dishTypes?: string[],
    extendedIngredients?: IExtendedIngredient[],
    summary?: string,
    winePairing?: IWinePairing,
}

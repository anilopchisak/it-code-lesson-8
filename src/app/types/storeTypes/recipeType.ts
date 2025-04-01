export interface IAutocomplete {
    /** Уникальный идентификатор элемента */
    id: number,
    /** Заголовок элемента */
    title: string, 
    /** Тип изображения */
    imageType: string,
}

export interface IRecipeShort extends IAutocomplete {
    /** URL изображения рецепта */
    image: string, 
}

export interface IRecipes {
    /** Смещение для пагинации */
    offset: number,
    /** Количество рецептов в запросе */
    number: number,
    /** Список рецептов (краткая или полная версия) */
    results: IRecipeShort[] | IRecipeFull[],
    /** Общее количество доступных рецептов */
    totalResults: number,
}

interface ITemperature {
    /** Числовое значение температуры */
    number: number,
    /** Единица измерения температуры */
    unit: string,
}
  
interface IEquipment {
    /** Уникальный идентификатор оборудования */
    id: number,
    /** URL изображения оборудования */
    image: string,
    /** Название оборудования */
    name: string,
    /** Опциональная температура использования оборудования */
    temperature?: ITemperature,
}
  
interface IIngredient {
    /** Уникальный идентификатор ингредиента */
    id: number,
    /** URL изображения ингредиента */
    image: string,
    /** Название ингредиента */
    name: string,
}
  
interface ILength {
    /** Числовое значение продолжительности шага */
    number: number,
    /** Единица измерения продолжительности */
    unit: string,
}
  
export interface IStep {
    /** Оборудование, используемое на данном шаге */
    equipment: IEquipment[],
    /** Ингредиенты, используемые на данном шаге */
    ingredients: IIngredient[],
    /** Номер шага в инструкции */
    number: number,
    /** Описание шага */
    step: string,
    /** Опциональная продолжительность шага */
    length?: ILength,
}

export interface IAnalyzedInstructions {
    /** Название инструкции (если есть) */
    name?: string,
    /** Список шагов приготовления */
    steps: IStep[],
}

interface IMeasure {
    /** Количество ингредиента */
    amount: number,
    /** Полное наименование единицы измерения */
    unitLong: string,
    /** Короткое обозначение единицы измерения */
    unitShort: string,
}
  
interface IMeasures {
    /** Меры измерения в метрической системе */
    metric: IMeasure,
    /** Меры измерения в американской системе */
    us: IMeasure,
}
  
export interface IExtendedIngredient {
    /** Отдел магазина, где находится ингредиент */
    aisle: string,
    /** Количество ингредиента */
    amount: number,
    /** Консистенция ингредиента */
    consistency: string,
    /** Уникальный идентификатор ингредиента */
    id: number,
    /** URL изображения ингредиента */
    image: string,
    /** Меры измерения */
    measures: IMeasures,
    /** Дополнительные свойства ингредиента */
    meta: string[],
    /** Название ингредиента */
    name: string,
    /** Очищенное название ингредиента */
    nameClean: string,
    /** Оригинальное описание ингредиента */
    original: string,
    /** Оригинальное название ингредиента */
    originalName: string,
    /** Единица измерения */
    unit: string,
}
  
export interface IProductMatch {
    /** Уникальный идентификатор продукта */
    id: number,
    /** Название продукта */
    title: string,
    /** Описание продукта */
    description: string,
    /** Цена продукта */
    price: string,
    /** URL изображения продукта */
    imageUrl: string,
    /** Средняя оценка продукта */
    averageRating: number,
    /** Количество оценок продукта */
    ratingCount: number,
    /** Общий рейтинг продукта */
    score: number,
    /** Ссылка на продукт */
    link: string,
}
  
export interface IWinePairing {
    /** Список подходящих вин */
    pairedWines: string[],
    /** Описание сочетаемости вина с рецептом */
    pairingText: string,
    /** Список рекомендуемых винопродуктов */
    productMatches: IProductMatch[],
}
  
export interface IRecipeFull extends IRecipeShort {
    /** Количество порций */
    servings?: number,
    /** Время приготовления (минуты) */
    readyInMinutes?: number,
    /** Время готовки (минуты) */
    cookingMinutes?: number,
    /** Время подготовки (минуты) */
    preparationMinutes?: number,
    /** Лицензия рецепта */
    license?: string,
    /** Название источника рецепта */
    sourceName?: string,
    /** URL источника рецепта */
    sourceUrl?: string,
    /** URL Spoonacular источника рецепта */
    spoonacularSourceUrl?: string,
    /** Оценка здоровья рецепта */
    healthScore?: number,
    /** Оценка Spoonacular */
    spoonacularScore?: number,
    /** Цена за порцию */
    pricePerServing?: number,
    /** Количество лайков рецепта */
    aggregateLikes?: number,
    /** Детализированные инструкции */
    analyzedInstructions?: IAnalyzedInstructions[],
    /** Флаг бюджетного рецепта */
    cheap?: boolean,
    /** Авторские права */
    creditsText?: string,
    /** Типы кухни рецепта */
    cuisines?: string[],
    /** Флаг безмолочного рецепта */
    dairyFree?: boolean,
    /** Список подходящих диет */
    diets?: string[],
    /** Разрывы в диетах */
    gaps?: string,
    /** Флаг безглютенового рецепта */
    glutenFree?: boolean,
    /** Инструкции приготовления */
    instructions?: string,
    /** Флаг кето-диеты */
    ketogenic?: boolean,
    /** Флаг низко-FODMAP */
    lowFodmap?: boolean,
    /** Подходящие события */
    occasions?: string[],
    /** Флаг устойчивого рецепта */
    sustainable?: boolean,
    /** Флаг веганского рецепта */
    vegan?: boolean,
    /** Флаг вегетарианского рецепта */
    vegetarian?: boolean,
    /** Флаг очень полезного рецепта */
    veryHealthy?: boolean,
    /** Флаг популярного рецепта */
    veryPopular?: boolean,
    /** Флаг соответствия Whole30 */
    whole30?: boolean,
    /** Количество умных баллов Weight Watchers */
    weightWatcherSmartPoints?: number,
    /** Типы блюд */
    dishTypes?: string[],
    /** Расширенный список ингредиентов */
    extendedIngredients?: IExtendedIngredient[],
    /** Краткое описание рецепта */
    summary?: string,
    /** Рекомендации по сочетанию с вином */
    winePairing?: IWinePairing,
}

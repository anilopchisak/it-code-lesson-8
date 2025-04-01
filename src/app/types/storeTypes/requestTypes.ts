export enum loadingStatus {
    /** Статус ожидания, начальное состояние */
    Idle = 'Idle',
    /** Процесс загрузки */
    Loading = 'Loading',
    /** Загрузка успешно завершена */
    Success = 'Success',
    /** Произошла ошибка при загрузке */
    Error = 'Error',
    /** Данные не найдены */
    NotFound = 'Not found'
}

export enum sortType {
    /** Сортировка по популярности */
    popularity = 'popularity',
    /** Сортировка по времени приготовления */
    time = 'time'
}

export enum sortDirectionType {
    /** Сортировка по возрастанию */
    asc = 'asc',
    /** Сортировка по убыванию */
    desc = 'desc'
}

export enum sortTypeDisplay {
    /** Отображение сортировки по популярности */
    popularity = 'Popularity',
    /** Отображение сортировки по минимальному времени приготовления */
    minTime = 'Quick and easy',
    /** Отображение сортировки по максимальному времени приготовления */
    maxTime = 'Complex recipes'
}

export enum cuisineType {
    /** Африканская кухня */
    African = 'African',
    /** Азиатская кухня */
    Asian = 'Asian',
    /** Американская кухня */
    American = 'American',
    /** Британская кухня */
    British = 'British',
    /** Каджунская кухня */
    Cajun = 'Cajun',
    /** Карибская кухня */
    Caribbean = 'Caribbean',
    /** Китайская кухня */
    Chinese = 'Chinese',
    /** Восточноевропейская кухня */
    EasternEuropean = 'Eastern European',
    /** Европейская кухня */
    European = 'European',
    /** Французская кухня */
    French = 'French',
    /** Немецкая кухня */
    German = 'German',
    /** Греческая кухня */
    Greek = 'Greek',
    /** Индийская кухня */
    Indian = 'Indian',
    /** Ирландская кухня */
    Irish = 'Irish',
    /** Итальянская кухня */
    Italian = 'Italian',
    /** Японская кухня */
    Japanese = 'Japanese',
    /** Еврейская кухня */
    Jewish = 'Jewish',
    /** Корейская кухня */
    Korean = 'Korean',
    /** Латиноамериканская кухня */
    LatinAmerican = 'Latin American',
    /** Средиземноморская кухня */
    Mediterranean = 'Mediterranean',
    /** Мексиканская кухня */
    Mexican = 'Mexican',
    /** Ближневосточная кухня */
    MiddleEastern = 'Middle Eastern',
    /** Североевропейская кухня */
    Nordic = 'Nordic',
    /** Южная кухня */
    Southern = 'Southern',
    /** Испанская кухня */
    Spanish = 'Spanish',
    /** Тайская кухня */
    Thai = 'Thai',
    /** Вьетнамская кухня */
    Vietnamese = 'Vietnamese',
}

export enum dietType {
    /** Безглютеновая диета */
    GlutenFree = "Gluten Free",
    /** Кетогенная диета */
    Ketogenic = "Ketogenic",
    /** Вегетарианская диета */
    Vegetarian = "Vegetarian",
    /** Лактовегетарианская диета */
    LactoVegetarian = "Lacto Vegetarian",
    /** Ововегетарианская диета */
    OvoVegetarian = "Ovo Vegetarian",
    /** Веганская диета */
    Vegan = "Vegan",
    /** Пескетарианская диета */
    Pescetarian = "Pescetarian",
    /** Палеолитическая диета */
    Paleo = "Paleo",
    /** Первобытная диета */
    Primal = "Primal",
    /** Диета Low FODMAP */
    LowFODMAP = "Low FODMAP",
    /** Диета Whole30 */
    Whole30 = "Whole30"
}

export enum intoleranceType {
    /** Непереносимость молочных продуктов */
    Dairy = "Dairy",
    /** Непереносимость яиц */
    Egg = "Egg",
    /** Непереносимость глютена */
    Gluten = "Gluten",
    /** Непереносимость зерновых */
    Grain = "Grain",
    /** Непереносимость арахиса */
    Peanut = "Peanut",
    /** Непереносимость морепродуктов */
    Seafood = "Seafood",
    /** Непереносимость кунжута */
    Sesame = "Sesame",
    /** Непереносимость моллюсков */
    Shellfish = "Shellfish",
    /** Непереносимость сои */
    Soy = "Soy",
    /** Непереносимость сульфитов */
    Sulfite = "Sulfite",
    /** Непереносимость орехов */
    TreeNut = "Tree Nut",
    /** Непереносимость пшеницы */
    Wheat = "Wheat",
}

export enum mealType {
    /** Основное блюдо */
    MainCourse = 'Main Course',
    /** Гарнир */
    SideDish = 'Side Dish',
    /** Десерт */
    Dessert = 'Dessert',
    /** Закуска */
    Appetizer = 'Appetizer',
    /** Салат */
    Salad = 'Salad',
    /** Хлеб */
    Bread = 'Bread',
    /** Завтрак */
    Breakfast = 'Breakfast',
    /** Суп */
    Soup = 'Soup',
    /** Напиток */
    Beverage = 'Beverage',
    /** Соус */
    Sauce = 'Sauce',
    /** Маринад */
    Marinade = 'Marinade',
    /** Фингер-фуд */
    FingerFood = 'Finger Food',
    /** Перекус */
    Snack = 'Snack',
    /** Напиток */
    Drink = 'Drink',
}

export interface IRequestParams extends IFilterParams, ISortParams {
    /** Поисковый запрос */
    query: string | null,
    /** Смещение для пагинации */
    offset: number | 0,
    /** Количество запрашиваемых элементов */
    number: number | 10,
    /** Флаг добавления дополнительной информации о рецептах */
    addRecipeInformation: boolean,
}

interface IFilterParams {
    /** Тип кухни */
    cuisine: cuisineType[] | null,
    /** Тип диеты */
    diet: dietType[] | null,
    /** Ограничения по непереносимости */
    intolerance: intoleranceType[] | null,
    /** Тип блюда */
    type: mealType[] | null
}

interface ISortParams {
    /** Поле для сортировки */
    sort: sortType | null,
    /** Направление сортировки */
    sortDirection: sortDirectionType | null,
}

export interface IRequestRecipe {
    /** Флаг добавления рекомендаций по вину */
    addWinePairing: boolean,
    /** Флаг добавления пошаговых инструкций */
    analyzedInstructions: boolean,
}

export interface IAutocompleteParams {
    /** Поисковый запрос для автодополнения */
    query: string | null,
    /** Количество возвращаемых элементов */
    number: number,
}

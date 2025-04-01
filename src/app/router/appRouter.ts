import { createRouter, createWebHistory } from 'vue-router';
import FilterPage from '../../pages/FilterPage.vue';
import RecipePage from '../../pages/RecipePage.vue';
import HomePage from '../../pages/HomePage.vue';
import { FILTER_PAGE_ROUTE, HOME_PAGE_ROUTE, RECIPE_PAGE_ROUTE } from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: HOME_PAGE_ROUTE, 
            name: 'home',
            component: HomePage
        },
        { 
            path: FILTER_PAGE_ROUTE, 
            name: 'filter',
            component: FilterPage 
        },
        { 
            path: RECIPE_PAGE_ROUTE + ":id", 
            name: 'recipe', 
            component: RecipePage, 
            props: true 
        },
    ]
});

export default router;

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRecipeStore } from '../../app/stores/recipeStore';
import RecipeCard from '../../features/FilterPageFeatures/RecipeCard.vue';
import type { IRecipes } from '../../app/types/storeTypes/recipeType';
import SortSelect from '../../features/FilterPageFeatures/Filters/SortSelect.vue';
import { loadingStatus } from '../../app/types/storeTypes/requestTypes';

const store = useRecipeStore();
const recipes = ref<IRecipes | null | undefined>(store.getRecipes);
const loading = ref(false);

const handleShowMore = (): void => {
    store.increaseOffset();
    store.fetchRecipes();
}

watch(() => store.recipes, (newValue) => {
    recipes.value = newValue;
});

watch(() => store.recipesLoadingStatus, () => {
    switch (store.recipesLoadingStatus){
        case loadingStatus.Loading: {
            loading.value = true;
            break;
        }
        default: {
            loading.value = false;
            break;
        }
    }
});
</script>

<template>
    <div v-loading.fullscreen.lock="loading" 
         class="mb-10">
        <SortSelect />
        <div v-if="store.recipesLoadingStatus === loadingStatus.Success"
            class="flex flex-col items-center">
            <div v-if="store.recipesLoadingStatus === loadingStatus.Success"
                class="mt-5 grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                <RecipeCard 
                    v-for="item in recipes?.results"
                    :recipe="item"
                    :key="item.id"
                    :id="item.id"
                />
            </div>
            <el-button plain
                       class="w-fit mt-10"
                       @click="handleShowMore"
                       v-if="store?.recipes?.results.length === (store.searchParams.number + store.searchParams.offset)">
                Show more
            </el-button>
        </div>
        <div v-else-if="store.recipesLoadingStatus === loadingStatus.NotFound" 
             class="mt-5">
            No recipes found :(
        </div>
        <div v-else-if="store.recipesLoadingStatus === loadingStatus.Error" 
             class="mt-5">
            Error
        </div>
    </div>
</template>

<script setup lang="ts">
import RecipeList from '../widgets/FilterPageWidgets/RecipeList.vue';
import Filters from '../features/FilterPageFeatures/Filters.vue';
import { onMounted } from 'vue';
import { useRecipeStore } from '../app/stores/recipeStore';

const store = useRecipeStore();

onMounted(() => {
    store.fetchRecipes();
});
</script>

<template>
    <div class="flex gap-8">
        <div>
            <Filters/>
        </div>
        <div>
            <RecipeList/>
        </div>
    </div>
</template>

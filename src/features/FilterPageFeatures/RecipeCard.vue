<script setup lang="ts">
import { RECIPE_PAGE_ROUTE } from '../../app/router/routes';
import type { IRecipeFull } from '../../app/types/storeTypes/recipeType';
import RecipeMetaInfo from '../../entities/recipe/RecipeMetaInfo.vue';
import { iconType } from '../../app/types/commonTypes';
import { defaultImage } from '../../app/utils/consts';
import { ref } from 'vue';

const props = defineProps<{
    id: number;
    recipe: IRecipeFull;
}>();

const imageSrc = ref<string>(props.recipe.image);
</script>

<template>
    <RouterLink :id="props.recipe.id"
                :to="RECIPE_PAGE_ROUTE + props.id"
                class="max-h-100 min-h-90 max-w-90 min-w-50 rounded-3xl p-4 cursor-pointer flex flex-col bg-gradient-to-b from-white via-white/40 via-[40%] to-[#e1f3ff]">
        <img :src="imageSrc" 
             class="rounded-3xl pb-3 w-fit"
             :alt="props.recipe.title"
             @error="imageSrc = defaultImage">
        <div class="flex flex-col justify-between grow">
            <p class="text-lg">
                <b>
                    {{ props.recipe.title }}
                </b>
            </p>
            <div class="flex gap-5">
                <RecipeMetaInfo :icon="iconType.Timer"
                                :text="props.recipe?.readyInMinutes" 
                                label="minutes"/>
                <RecipeMetaInfo :icon="iconType.KnifeFork"
                                :text="props.recipe.servings"
                                label="servings"/>
            </div>
        </div>
    </RouterLink>
</template>

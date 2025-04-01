<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '../app/stores/recipeStore';
import { loadingStatus } from '../app/types/storeTypes/requestTypes';
import HeaderRecipePage from '../widgets/RecipePageWidgets/HeaderRecipePage.vue';
import RecipeTitle from '../entities/recipe/RecipeTitle.vue';
import { iconType } from '../app/types/commonTypes';
import RecipeMetaInfoFull from '../entities/recipe/RecipeMetaInfoFull.vue';
import RecipeImage from '../entities/recipe/RecipeImage.vue';
import WinePairing from '../features/winePairing/WinePairing.vue';
import { defaultImage } from '../app/utils/consts';
import RecipeSummary from '../entities/recipe/RecipeSummary.vue';
import IngredientListWidget from '../widgets/RecipePageWidgets/IngredientListWidget.vue';
import DirectivesList from '../widgets/RecipePageWidgets/DirectivesList.vue';
import { mockRecipe } from '../app/mock/mockRecipe';

const route = useRoute();
const store = useRecipeStore();
const loading = ref<boolean>(false);

watch(() => store.selectedRecipeLoadingStatus, () => {
    switch (store.selectedRecipeLoadingStatus){
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

onMounted(async () => {
    // store.setSelectedRecipe(mockRecipe);
    // store.selectedRecipeLoadingStatus = loadingStatus.Success;
    store.fetchSelectedRecipe(Number(route.params.id));
});
</script>

<template>
<div class="common-layout" 
     v-loading.fullscreen.lock="loading">
    <el-scrollbar height="100%">
        <el-container>
            <el-header>
                <HeaderRecipePage :title="store.selectedRecipe?.title"/>
            </el-header>
            <el-main>
                <RecipeTitle :title="store?.selectedRecipe?.title"/>
                <div class="flex gap-10 my-10">
                    <RecipeMetaInfoFull title="prep time"
                                        :icon="iconType.Timer"
                                        :text="store?.selectedRecipe?.preparationMinutes" 
                                        label="Minutes"
                                        v-if="store?.selectedRecipe?.preparationMinutes"/>
                    <RecipeMetaInfoFull title="cook time"
                                        :icon="iconType.Timer"
                                        :text="store?.selectedRecipe?.cookingMinutes" 
                                        label="Minutes"
                                        v-if="store?.selectedRecipe?.cookingMinutes"/>
                    <RecipeMetaInfoFull title="cook time"
                                        :icon="iconType.Timer"
                                        :text="store?.selectedRecipe?.readyInMinutes" 
                                        label="Minutes"
                                        v-else/>
                    <RecipeMetaInfoFull :icon="iconType.KnifeFork"
                                        :text="store?.selectedRecipe?.servings"
                                        label="Servings"/>
                </div>
                <div class="flex gap-10 lg:max-h-[500px] flex-col lg:flex-row">
                    <RecipeImage :path="store?.selectedRecipe?.image || defaultImage"/>
                    <WinePairing v-if="store?.selectedRecipe?.winePairing?.pairedWines.length !== 0" 
                                :paired-wines="store?.selectedRecipe?.winePairing?.pairedWines"
                                :pairing-text="store?.selectedRecipe?.winePairing?.pairingText"/>
                </div>
                <div class="my-15 flex flex-col gap-15">
                    <RecipeSummary :summary=" store.selectedRecipe?.summary"/>
                    <IngredientListWidget :ingredients="store?.selectedRecipe?.extendedIngredients"/>
                    <DirectivesList :instructions="store.selectedRecipe?.analyzedInstructions" />
                </div>
            </el-main>
        </el-container>
    </el-scrollbar>
</div>
</template>

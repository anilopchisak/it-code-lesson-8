<script setup lang="ts">
import { defineProps } from 'vue';
import type { IExtendedIngredient } from '../../app/types/storeTypes/recipeType';
import IngredientCard from '../../entities/ingredient/IngredientCard.vue';

const props = defineProps<{
    ingredients: IExtendedIngredient[] | undefined;
}>();
</script>

<template>
    <div>
        <h1 class="font-bold text-3xl mb-15">
            Ingredients
        </h1>
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-10">
            <IngredientCard v-for="item in props.ingredients"
                    :name="item.nameClean"
                    :amount="item.amount"
                    :unit="item.unit"
                    :metricAmount="item.amount === item.measures.metric.amount ? '' : item.measures.metric.amount"
                    :metricUnit="item.unit === item.measures.metric.unitShort ? '' : item.measures.metric.unitShort" />
        </div>
    </div>
</template>

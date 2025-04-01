<script lang="ts" setup>
import { defineProps } from 'vue';
import type { IStep } from '../../app/types/storeTypes/recipeType';
import RecipeMetaInfo from '../recipe/RecipeMetaInfo.vue';
import { iconType } from '../../app/types/commonTypes';

const props = defineProps<{
    step: IStep | undefined;
}>();
</script>

<template>
    <div class="flex items-baseline justify-between">
        <h3 class="font-bold text-2xl text-orange-400">
            Step {{ props.step?.number }}
        </h3>
        <div v-if="step?.length?.number">
            <RecipeMetaInfo :icon="iconType.Timer"
                            :label="props.step?.length?.unit"
                            :text="props.step?.length?.number" />
        </div>
    </div>
    <p class="mt-10 text-gray-600">
        {{ props.step?.step }}
    </p>
    <el-divider />    
</template>

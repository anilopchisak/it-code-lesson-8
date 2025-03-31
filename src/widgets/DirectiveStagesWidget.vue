<script lang="ts" setup>
import { defineProps } from 'vue';
import type { IAnalyzedInstructions } from '../app/types/storeTypes/recipeType';
import StepDirective from '../entities/step/StepDirective.vue';

const props = defineProps<{
    steps: IAnalyzedInstructions | undefined;
}>();
</script>

<template>
    <h1 class="font-bold text-2xl my-10" 
        v-if="props?.steps?.name">
        {{ props?.steps?.name }}
    </h1>
    <StepDirective v-for="item in steps?.steps"  
                   :step="item" />  
</template>

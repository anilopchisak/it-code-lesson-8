<script lang="ts" setup>
import { defineProps } from 'vue';
import type { IAnalyzedInstructions } from '../../app/types/storeTypes/recipeType';
import DirectiveStagesWidget from '../DirectiveStagesWidget.vue';

const props = defineProps<{
    instructions: IAnalyzedInstructions[] | undefined;
}>();
</script>

<template>
    <div>
        <h1 class="font-bold text-3xl mb-15">
            Directives
        </h1>
        <DirectiveStagesWidget v-for="item in instructions" 
                            :steps="item"/>
    </div>
</template>

<script setup lang="ts">
import RecipeList from '../widgets/FilterPageWidgets/RecipeList.vue';
import Filters from '../features/FilterPageFeatures/Filters.vue';
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

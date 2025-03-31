<script setup lang="ts">
import { ref } from 'vue';
import { cuisineType, dietType, intoleranceType, mealType } from '../../app/types/storeTypes/requestTypes.ts';
import FilterSelect from './Filters/Layout/FilterSelect.vue';
import { useRecipeStore } from '../../app/stores/recipeStore.ts';

const store = useRecipeStore();
const resetFilter = ref<boolean>(false);

const handleFilter = () => {
  store.$reset();
  store.fetchRecipes();
}
const handleResetFilters = () => {
  store.resetSearchParams();
  store.fetchRecipes();
  resetFilter.value = true;
  setTimeout(() => {
    resetFilter.value = false;
  }, 0);
}
</script>

<template>
  <div class="overflow-y-auto">
    <FilterSelect
      name="Diet"
      :options="Object.values(dietType)"
      :setFunc="store.setDiet"
      :reset="resetFilter"/>
    <FilterSelect
      name="Cuisine"
      :options="Object.values(cuisineType)"
      :setFunc="store.setCuisine"
      :reset="resetFilter"/>
    <FilterSelect
      name="Intolerance"
      :options="Object.values(intoleranceType)"
      :setFunc="store.setIntolerance"
      :reset="resetFilter"/>
    <FilterSelect
      name="Meal type"
      :options="Object.values(mealType)"
      :setFunc="store.setType"
      :reset="resetFilter"/>
    <el-button type="warning" 
               plain 
               class="mt-5"
               @click="handleFilter">
      Filter
    </el-button>
    <el-button plain
               class="mt-5"
               @click="handleResetFilters">
        Reset
    </el-button>
  </div>
</template>

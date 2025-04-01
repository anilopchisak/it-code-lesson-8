<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRecipeStore } from '../../../app/stores/recipeStore.ts';
import { sortTypeDisplay, sortType, sortDirectionType } from '../../../app/types/storeTypes/requestTypes.ts';

const store = useRecipeStore();
const options = Object.values(sortTypeDisplay);
const sortOption = ref<sortTypeDisplay | null>(null);

watch(() => sortOption.value, (newValue) => {
  store.$reset();
  store.setSortParams(newValue);
  store.fetchRecipes();
});

onMounted(() => {
  if (store.searchParams.sort && store.searchParams.sortDirection) {
    if (store.searchParams.sort === sortType.popularity) {
      sortOption.value = sortTypeDisplay.popularity;
    }
    else if (store.searchParams.sort === sortType.time) {
      if (store.searchParams.sortDirection === sortDirectionType.asc) {
        sortOption.value = sortTypeDisplay.minTime;
      }
      else {
        sortOption.value = sortTypeDisplay.maxTime;
      }
    }
  }
});
</script>

<template>
  <el-select
      v-model="sortOption"
      clearable
      placeholder="Sorting"
      style="width: 13rem">
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"/>
  </el-select>
</template>

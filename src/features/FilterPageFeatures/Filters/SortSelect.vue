<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRecipeStore } from '../../../app/stores/recipeStore.ts';
import { sortTypeDisplay } from '../../../app/types/storeTypes/requestTypes.ts';

const store = useRecipeStore();
const options = Object.values(sortTypeDisplay);
const sortOption = ref<sortTypeDisplay | null>(null);

watch(() => sortOption.value, (newValue) => {
  store.$reset();
  store.setSortParams(newValue);
  store.fetchRecipes();
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

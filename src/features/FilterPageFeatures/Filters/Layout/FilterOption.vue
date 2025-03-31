<script setup lang="ts">
import { ref, watch } from 'vue';
import { cuisineType, dietType, intoleranceType, mealType } from '../../../../app/types/storeTypes/requestTypes';

const props = defineProps<{
  option: cuisineType | dietType | intoleranceType | mealType | null
}>();

const value = ref<cuisineType | dietType | intoleranceType | mealType | null>(props.option);

const emit = defineEmits(['handleCheckedChange']);

watch(value, (newValue) => {
  emit('handleCheckedChange', newValue);
});
</script>

<template>
  <el-checkbox v-model="value" 
               :value="option" 
               size="large">{{ option }}</el-checkbox>
</template>

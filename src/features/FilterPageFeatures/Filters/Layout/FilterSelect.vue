<script setup lang="ts" generic="T">
import { onMounted, ref, watch } from 'vue';
import type { CheckboxValueType } from 'element-plus'
import { cuisineType, dietType, intoleranceType, mealType } from '../../../../app/types/storeTypes/requestTypes.ts';
import FilterOption from './FilterOption.vue';

const props = defineProps<{
  /**Название группы фильтра */
  name: string
  /**Список опций фильтрации */
  options: (cuisineType | dietType | intoleranceType | mealType)[] | null
  /**Установка значений в стор */
  setFunc: (value: T[] | null) => void
  /** Флаг сброса всех фильтров */
  reset: boolean
  /**Массив выбранных значений */
  checkedOptions: string[] | null
}>();

/**Флаг выделения всех чекбоксов */
const checkAll = ref(false);
/**Флаг выбора части чекбоксов (не 0 и не все) */
const isIndeterminate = ref(false);
/**Массив выбранных значений */
const checkedOptions = ref<string[] | null>();

/**Функция изменения выбранных значений: 0 или все */
const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedOptions.value = val ? props.options : [];
  isIndeterminate.value = false;
  handleChange();
}
/**Функция изменения выделения одного значения */
const handleCheckedChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length;
  checkAll.value = props.options ? 
                  checkedCount === props.options.length 
                  : false;
  isIndeterminate.value = props.options ? 
                          checkedCount > 0 && checkedCount < props.options.length 
                          : false;
  handleChange();
}
/**Функция обновления значения в стор */
const handleChange = () => {
  props.setFunc(checkedOptions.value as T[] | null);
}

watch(() => props.reset, (newValue) => {
  if (newValue) {
    checkedOptions.value = [];
    checkAll.value = false;
    isIndeterminate.value = false;
    handleChange();
  }
});

onMounted(() => {
  if (props.checkedOptions) {
    checkedOptions.value = props.checkedOptions;
  }
})
</script>

<template>
  <div class="mb-7">
    <div class="flex justify-between items-baseline">
      <label>
        <b>
          {{ name }}
        </b>
      </label>
      <el-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange">
        <span>
          Check all
        </span>
      </el-checkbox>
    </div>
    <div v-if="options" 
         class="mt-3 max-h-50 overflow-y-auto">
      <el-checkbox-group
        v-model="checkedOptions"
        @change="handleCheckedChange"
        class="flex flex-col">
        <FilterOption 
          v-for="item in options"
          :key="item"
          :option="item"/>
      </el-checkbox-group>
    </div>
    <div v-else>
      No options found
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    name: string;
    amount: number;
    unit: string  | '';
    metricAmount?: number | undefined | '';
    metricUnit?: string | undefined | '';
}>();
</script>

<template>
    <div>
        <div class="h-5 flex justify-between">
            <div class="flex gap-3 items-center">
                <el-icon>
                    <CircleCheck  class="text-gray-500"/>
                </el-icon>
                <p>
                    {{ props.name }}
                </p>
            </div>
            <div class="flex gap-3">
                <p>
                    {{ props.amount }} {{ props.unit || 'items' }}
                </p>
                <p v-if="metricAmount && metricUnit">
                    /
                </p>
                <p v-if="metricAmount && metricUnit">
                    {{ props.metricAmount }} {{ props.metricUnit }}
                </p>
            </div>
        </div>
        <el-divider /> 
    </div>
</template>

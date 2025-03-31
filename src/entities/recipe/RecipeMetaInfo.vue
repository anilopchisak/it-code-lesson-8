<script setup lang="ts">
import { iconType } from '../../app/types/commonTypes';

const props = defineProps<{
  icon: string;
  text: string | number | undefined;
  label?: string;
}>();
</script>

<template>
    <p>
        <el-icon>
            <Timer v-if="icon === iconType.Timer" />
            <KnifeFork v-else-if="icon === iconType.KnifeFork" />
        </el-icon>
            {{ props.text }} 
        <span v-if="label" class="capitalize">
            {{ props.label }}
        </span>
    </p>
</template>

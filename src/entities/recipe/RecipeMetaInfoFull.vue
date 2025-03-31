<script setup lang="ts">
import { iconType } from '../../app/types/commonTypes';

const props = defineProps<{
    title?: string;
    icon: string;
    text: string | number | undefined;
    label?: string;
}>();
</script>

<template>
    <div class="flex gap-5 px-5 items-center border-s-1 border-gray-300">
        <el-icon size="24">
            <Timer v-if="icon === iconType.Timer" />
            <KnifeFork v-else-if="icon === iconType.KnifeFork" />
        </el-icon>
        <div>
            <p class="font-bold uppercase">
                {{ props.title }}
            </p>
            <p>
                {{ props.text }} {{ props.label }}
            </p>
        </div>
    </div>
</template>

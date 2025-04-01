<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    path: string | undefined;
}>();
</script>

<template>
    <div class="h-[500px] rounded-3xl bg-cover lg:w-[880px]"
        :style="{ backgroundImage: `url(${props.path})` }"></div>
</template>

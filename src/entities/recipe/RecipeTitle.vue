<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    title: string | undefined;
}>();
</script>

<template>
    <h1 class="font-bold text-5xl">
        {{ props.title }}
    </h1>
</template>

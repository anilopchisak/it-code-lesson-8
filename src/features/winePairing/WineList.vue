<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    pairedWines: string[] | undefined;
}>();
</script>

<template>
    <ul class="p-5 text-lg font-semibold italic text-gray-700">
        <li v-for="wine in pairedWines"
            class="capitalize">
            {{ wine }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    content: string
    to: string
    color?: string
}>()
</script>

<template>
    <RouterLink :to="to" 
                class="cursor-pointer duration-100 ease-out hover:text-orange-500 text-gray-700" 
                :class="color">
        {{ content }}
    </RouterLink>    
</template>

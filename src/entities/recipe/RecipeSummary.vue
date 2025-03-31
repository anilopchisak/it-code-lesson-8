<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import DOMPurify from 'dompurify';

const props = defineProps<{
    summary: string | undefined;
}>();

const sanitizedSummary = computed(() => DOMPurify.sanitize(props.summary));
</script>

<template>
    <div class="text-gray-500">
        <div v-html="sanitizedSummary"></div>
    </div>
</template>

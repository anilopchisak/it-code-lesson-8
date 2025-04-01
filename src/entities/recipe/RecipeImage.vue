<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { defaultImage } from '../../app/utils/consts';

const props = defineProps<{
    path: string | undefined;
}>();

const imageSrc = ref<string | undefined>(props.path);
</script>

<template>
    <div class="h-[500px] rounded-3xl bg-cover lg:w-[880px]"
        :style="{ backgroundImage: `url(${imageSrc})` }"
        @error="imageSrc = defaultImage"></div>
</template>

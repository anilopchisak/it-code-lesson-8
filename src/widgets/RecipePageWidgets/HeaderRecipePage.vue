<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

defineProps<{
    title: string | undefined;
}>();

const router = useRouter();

const handleBack = () => {
    router.back();
}
</script>

<template>
    <el-page-header :icon="ArrowLeft"
                    @back="handleBack">
        <template #content>
            <span class="text-large font-600 mr-3"> 
                {{ title }} 
            </span>
        </template>
    </el-page-header>
</template>

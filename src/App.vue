<script setup lang="ts">
import { onMounted, watch, nextTick, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useRecipeStore } from './app/stores/recipeStore';
import Header from './widgets/Header.vue';
import Footer from './widgets/Footer.vue';
import { mock } from './app/mock/mock';
import { loadingStatus } from './app/types/storeTypes/requestTypes';

const store = useRecipeStore();
/** Переменная для скролла вниз */
const mainContainer = ref<HTMLElement | null>(null);

watch(
    () => store.getRecipes,
    async () => {
        await nextTick();
        if (mainContainer.value) {
            mainContainer.value.scrollTo({
                top: store.searchParams.offset !== 0 ? 999999 : 0,
                behavior: 'instant'});
        }
    },
    { deep: true }
);

onMounted(() => {
    store.fetchRecipes();
});
</script>

<template>
    <div class="common-layout h-screen flex justify-center">
        <el-container class="h-full max-w-420">
            <el-header class="w-full">
                <Header />
            </el-header>
            <el-scrollbar ref="mainContainer">
                <el-main height="100%">
                    <RouterView />
                </el-main>
                <el-footer height="fit-content">
                    <Footer />
                </el-footer>
            </el-scrollbar>
        </el-container>
    </div>
</template>

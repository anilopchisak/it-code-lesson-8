<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useRecipeStore } from '../app/stores/recipeStore.ts';
import { debounce } from '../app/services/debounce.ts';
import { FILTER_PAGE_ROUTE } from '../app/router/routes.ts';

const searchValue = ref<string>('');
const store = useRecipeStore();
const router = useRouter();

const fetchSuggestions = (queryString: string, callback: (suggestions: { value: string }[] | undefined) => void) => {
    if (store.getAutocomplete !== null) {
        const results = queryString ? store.getAutocomplete?.map(item => ({ value: item.title })) : [];
        callback(results);
    }
    else callback([]);
}

const handleSearch = () => {
    if (searchValue.value) {
        store.setQuery(searchValue.value.trim().toLowerCase());
        store.fetchRecipes();
        router.push(FILTER_PAGE_ROUTE);
    }
}

watch(searchValue, () => {
    if (searchValue.value) {
        store.setAutocompleteParams(searchValue.value);
        const debouncedFetchAutocomplete = debounce(store.fetchAutocomplete);
        debouncedFetchAutocomplete();
    }
    else {
        store.setQuery(null);
    }
});
</script>

<template>
    <form @submit.prevent="handleSearch">
        <el-autocomplete
            v-model="searchValue"
            :fetch-suggestions="fetchSuggestions"
            :trigger-on-focus="false"
            clearable
            style="width: 100%"
            size="large"
            placeholder="Search recipe"
            :suffix-icon="Search"
        />
    </form>
</template>

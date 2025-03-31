<script setup lang="ts">
import { FILTER_PAGE_ROUTE } from '../../app/router/routes';
import MenuLink from './MenuLink.vue';
</script>

<template>
    <MenuLink content="Recipes" 
              :to="FILTER_PAGE_ROUTE"/>
</template>

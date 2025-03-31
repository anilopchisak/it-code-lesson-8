<script setup lang="ts">
import { HOME_PAGE_ROUTE } from '../../app/router/routes';
import MenuLink from './MenuLink.vue';
</script>

<template>
    <MenuLink content="Home" 
              :to="HOME_PAGE_ROUTE"/>
</template>

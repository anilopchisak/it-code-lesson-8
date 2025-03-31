<script setup lang="ts">
import HomeLink from '../entities/link/HomeLink.vue';
import RecipesLink from '../entities/link/RecipesLink.vue';
import Search from '../features/Search.vue';
import Logo from '../shared/Logo.vue';
</script>

<template>
    <el-row :gutter="20" 
            class="py-2 items-baseline justify-between z-100000">
        <el-col :span="6">
            <Logo/>
        </el-col>
        <el-col :span="10">
            <div class="flex justify-center gap-6 h-full">
                <HomeLink/>
                <RecipesLink/>
            </div>
        </el-col> 
        <el-col :span="8">
            <Search/>
        </el-col> 
    </el-row>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import WineList from './WineList.vue';

const props = defineProps<{
    pairedWines: string[] | undefined;
    pairingText: string | undefined;
}>();
</script>

<template>
    <div class="bg-[#e1f3ff] rounded-3xl p-8 min-w-100 max-w-full lg:max-w-[40%] overflow-y-auto overflow-x-hidden">
        <h3 class="font-bold text-2xl">
            Wine Pairing
        </h3>
        <WineList :pairedWines="props.pairedWines" 
                  class="columns-2"/>
        <p class="text-gray-500">
            {{ props.pairingText }}
        </p>
    </div>
</template>

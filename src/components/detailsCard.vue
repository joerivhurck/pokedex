<script setup lang="ts">
import typeChips from './typeChips.vue'
</script>

<template>
  <div
    class="card mt-2 flex w-full flex-shrink-0 flex-col items-start gap-4 rounded-lg bg-white px-5 pb-5 pt-14"
  >
    <div class="types flex items-start justify-center gap-4 self-stretch pt-1">
      <typeChips :pokemonType="'type'" />
      <typeChips :pokemonType="'type'" />
    </div>
    <div class="header flex justify-center self-stretch text-sm/4 text-wire font-poppins font-bold ">
       About
    </div>
  </div>
</template>

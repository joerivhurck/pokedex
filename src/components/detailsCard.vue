<script setup lang="ts">
import typeChips from './typeChips.vue'
</script>

<template>
  <div
    class="flex w-full flex-shrink-0 flex-col items-start gap-4 rounded-lg bg-white px-5 pb-5 pt-14"
  >
    <div class="types flex items-start justify-center gap-4 self-stretch">
      <typeChips :pokemonType="'type'" />
      <typeChips :pokemonType="'type'" />
    </div>
  </div>
</template>

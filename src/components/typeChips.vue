<script setup lang="ts">
defineProps<{
  pokemonType: String
}>()
</script>

<template>
  <div class="flex flex-col items-start rounded-xl bg-medium px-2 py-[2px] font-poppins text-xs font-bold text-white">
    {{ pokemonType }}
  </div>
</template>

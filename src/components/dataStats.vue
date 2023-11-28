<script setup lang="ts">
defineProps<{
  data: String
}>()
</script>

<template>
  <div class="font-poppins font-normal text-s/4 text-dark">{{ data }}</div>
</template>

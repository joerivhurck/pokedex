<script setup lang="ts">
defineProps<{
  text: String
}>()
</script>

<template>
  <div class="flex justify-center self-stretch font-poppins text-s/3 font-normal text-medium">
    {{ text }}
  </div>
</template>

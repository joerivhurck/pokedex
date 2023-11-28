<script setup lang="ts">
defineProps<{
  labelName: String
}>()
</script>

<template>
    <div class="font-poppins text-s/4 font-bold text-wire">{{ labelName }}</div>
</template>
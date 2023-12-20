<script setup lang="ts">

 defineProps<{
  text: string
}>()
</script>

<template>
      <div class="upperFrame flex justify-center gap-1 self-stretch bg-white px-0 py-2">
          <slot></slot>
          <div class="font-poppins text-s/4 font-normal">{{ text }}</div>
      </div>
</template>
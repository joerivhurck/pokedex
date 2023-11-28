<script setup lang="ts"></script>

<template>
  <div class="frame flex flex-col items-center gap-1 bg-white">
    <slot></slot>
  </div>
</template>

<style scoped>
.frame {
  flex: 1 0 0;
}
</style>

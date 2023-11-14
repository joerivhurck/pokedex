<script setup lang="ts">
import arrowBack from './icons/arrowBack.vue'
import chevronLeft from './icons/chevronLeft.vue'
import chevronRight from './icons/chevronRight.vue'
import pokeBall from './icons/pokeBall.vue'
</script>
<template>
  <div class="Pokemon-details flex h-screen shrink-0 flex-col items-start bg-[#b8b8b8] p-1">
    <pokeBall/>
    <div class="title flex w-full items-center gap-2 px-5 pb-6 pt-5">
      <arrowBack />
      <div class="pokemon-name flex w-full font-poppins text-2xl font-bold text-white">
        Pokémon Name
      </div>
      <div class="pokemon-id font-poppins text-xs font-bold text-white">#999</div>
    </div>
    <div class="image flex w-full flex-row items-center justify-between px-5 py-4">
      <chevronLeft />
      <img src="../assets/sprites/bulbasaur.png" alt="" />
      <chevronRight />
    </div>
  </div>
</template>

<style scoped>
.arrow-back {
  width: 32px;
  height: 32px;
}
</style>

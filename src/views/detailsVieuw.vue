<script setup lang="ts">
import arrowBack from '@/components/icons/arrowBack.vue'
import chevronLeft from '@/components/icons/chevronLeft.vue'
import chevronRight from '@/components/icons/chevronRight.vue'
import backgroudPokeball from '@/components/icons/backgroudPokeball.vue'
import detailsCard from '@/components/detailsCard.vue'
import { usePokemons } from '@/services/pokemon.service'
const { allPokemon } = usePokemons()
</script>
<template>
  <div class="Pokemon-details flex h-screen shrink-0 flex-col items-start bg-wire p-1">
    <backgroudPokeball class="absolute right-0 top-0 p-2 pr-2" style="z-index: 1" />
    <div class="title flex w-full items-center gap-2 px-5 pb-6 pt-5">
      <arrowBack />
      <div class="pokemon-name flex w-full font-poppins text-2xl font-bold text-white">
        Pokémon Name
      </div>
      <div class="pokemon-id font-poppins text-xs font-bold text-white">#999</div>
    </div>
    <div class="image flex h-36 w-full flex-row items-center justify-between px-5 py-4">
      <chevronLeft />
      <img class=" mt-16" src="../assets/sprites/bulbasaur.png" alt="" style="z-index: 3" />
      <chevronRight />
    </div>
    <detailsCard />
  </div>
</template>

<style scoped>
.arrow-back {
  width: 32px;
  height: 32px;
}
</style>

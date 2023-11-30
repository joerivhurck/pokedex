<script setup lang="ts">
import { ref } from 'vue'
import { usePokemons } from '@/services/pokemon.service'
import { useRouter } from 'vue-router'
const {selectedPokemon} = usePokemons()

const id = ref('#999')

const props = defineProps<{
  iconFilename: string,
  name : string
}>()

const router = useRouter()

function navDetails() {
  router.push('/details')
}

function getImageUrl() {
  return new URL(`../assets/sprites/${props.iconFilename}`, import.meta.url).toString()
}
</script>

<template>
  <div class="row flex items-start gap-2 self-stretch">
    <div
      @click="navDetails"
      class="item-list flex h-[108px] w-[104px] cursor-pointer flex-col items-center justify-between rounded-lg  bg-white drop-shadow"
    >
      <div
        class="number flex items-start justify-end gap-2 self-stretch px-2 pb-0 pt-1 text-right font-poppins text-[8px]/3 font-normal text-medium"
      >
        {{ id }}
      </div>
      <div
        class="pokemon-name flex items-start justify-center self-stretch rounded-[7px] bg-background px-2 pb-1 pt-6 font-poppins text-[10px]/4 font-normal text-dark"
      >
       {{ name}}
      </div>
      <img class="silhoutte absolute mt-4 h-[72px] w-[72px]" :src="getImageUrl()" alt="" />
    </div>
  </div>
</template>

<style scoped></style>

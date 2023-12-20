<script setup lang="ts">
import arrowBack from '@/components/icons/arrowBack.vue'
import chevronLeft from '@/components/icons/chevronLeft.vue'
import chevronRight from '@/components/icons/chevronRight.vue'
import backgroudPokeball from '@/components/icons/backgroudPokeball.vue'
import typeChips from '@/components/typeChips.vue'
import framesDetails from '@/components/framesDetails.vue'
import upperFrame from '@/components/upperFrame.vue'
import underFrame from '@/components/underFrame.vue'
import weightIcon from '@/components/icons/weightIcon.vue'
import StraightenIcon from '@/components/icons/straightenIcon.vue'
import deviderFrames from '@/components/deviderFrames.vue'
import baseStats from '@/components/baseStats.vue'
import { useRoute } from 'vue-router'
import { usePokemons } from '@/services/pokemon.service'
import { ref } from 'vue'
const { allPokemon} = usePokemons()
const router = useRoute()


const paramsName = router.params.name
const pokemonName = ref('')
const pokemonId = ref()
const pokemonSprite = ref('')
const pokemonWeight = ref()
const pokemonHeight = ref()


for (let i = 0; i < allPokemon.value.length; i++) {
  if (allPokemon.value[i].name === paramsName) {
    pokemonName.value = allPokemon.value[i].name
    pokemonId.value = allPokemon.value[i].id
    pokemonSprite.value = allPokemon.value[i].sprite
    pokemonWeight.value = allPokemon.value[i].weight
    pokemonHeight.value = allPokemon.value[i].height
    pokemonWeight.value.toString()
    
  }
}
</script>
<template>
  <div class="Pokemon-details flex h-screen shrink-0 flex-col items-start bg-wire p-1">
    <backgroudPokeball class="absolute right-0 top-0 p-2 pr-2" style="z-index: 1" />
    <div class="title flex w-full items-center gap-2 px-5 pb-6 pt-5">
      <arrowBack />
      <div class="pokemon-name flex w-full font-poppins text-2xl font-bold text-white">
        {{ pokemonName }}
      </div>
      <div class="pokemon-id font-poppins text-xs font-bold text-white">#{{ pokemonId }}</div>
    </div>
    <div class="image flex h-36 w-full flex-row items-center justify-between px-5 py-4">
      <chevronLeft />
      <img class="mt-16 h-56 w-56" :src="pokemonSprite" alt="" style="z-index: 3" />
      <chevronRight />
    </div>
    <div class="card mt-2 flex h-screen w-full flex-col items-start gap-4 rounded-lg bg-white px-5 pb-5 pt-14">
      <div class="types flex items-start justify-center gap-4 self-stretch pt-1">
        <typeChips :pokemonType="'type'" />
        <typeChips :pokemonType="'type'" />
      </div>
      <div class="header flex justify-center self-stretch font-poppins text-sm/4 font-bold text-wire">
        About
      </div>
      <div class="atribute flex items-start self-stretch">
        <framesDetails>
          <upperFrame :text="pokemonWeight+' kg'">
            <weightIcon></weightIcon>
          </upperFrame>

          <underFrame :text="'weight'"></underFrame>
        </framesDetails>
        <deviderFrames />
        <framesDetails>
          <upperFrame :text="pokemonHeight+'cm'">
            <StraightenIcon></StraightenIcon>
          </upperFrame>
          <underFrame :text="'height'"></underFrame>
        </framesDetails>
        <deviderFrames />
        <framesDetails>
          <div class="flex h-8 flex-col">
            <div class="font-poppins text-s/4 font-normal">abilty1</div>
            <div class="font-poppins text-s/4 font-normal">abilty2</div>
          </div>
          <underFrame :text="'moves'"></underFrame>
        </framesDetails>
      </div>
      <div class="paragraph flex flex-col justify-center self-stretch font-poppins text-s/4 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus
        condimentum maximus sit amet in eros.
      </div>
      <div class="flex w-full justify-center font-poppins text-sm/4 font-bold text-wire">
        Base Stats
      </div>
      <baseStats></baseStats>
    </div>
  </div>
</template>

<style scoped>
.arrow-back {
  width: 32px;
  height: 32px;
}

.atribute {
  flex: 1 0 0;
}

.paragraph {
  flex: 1 0 0;
}
</style>

<script setup lang="ts">
import typeChips from './typeChips.vue'
import framesDetails from './framesDetails.vue'
import upperFrame from './upperFrame.vue'
import underFrame from './underFrame.vue'
import weightIcon from './icons/weightIcon.vue'
import StraightenIcon from './icons/straightenIcon.vue'
import deviderFrames from './deviderFrames.vue'
import baseStats from './baseStats.vue'


</script>

<template>
  <div class="card mt-2 flex w-full h-screen flex-col items-start gap-4 rounded-lg bg-white px-5 pb-5 pt-14">
    <div class="types flex items-start justify-center gap-4 self-stretch pt-1">
      <typeChips :pokemonType="'type'" />
      <typeChips :pokemonType="'type'" />
    </div>
    <div class="header flex justify-center self-stretch font-poppins text-sm/4 font-bold text-wire">
      About
    </div>
    <div class="atribute flex items-start self-stretch">
      <framesDetails>
        <upperFrame :text="'9,9kg'">
          <weightIcon></weightIcon>
        </upperFrame>

        <underFrame :text="'weight'"></underFrame>
      </framesDetails>
      <deviderFrames />
      <framesDetails>
        <upperFrame :text="'9,9cm'">
          <StraightenIcon></StraightenIcon>
        </upperFrame>
        <underFrame :text="'height'"></underFrame>
      </framesDetails>
      <deviderFrames />
      <framesDetails>
        <div class="flex h-8 flex-col">
          <div class="text-s/4 font-poppins font-normal">abilty1</div>
          <div class="text-s/4 font-poppins font-normal">abilty2</div>
        </div>
        <underFrame :text="'moves'"></underFrame>
      </framesDetails>
    </div>
    <div class="paragraph text-s/4 flex flex-col justify-center self-stretch font-poppins font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus
      condimentum maximus sit amet in eros.
    </div>
    <div class="flex w-full justify-center font-poppins text-sm/4 font-bold text-wire">
      Base Stats
    </div>
    <baseStats></baseStats>
   
  </div>
</template>

<style scoped>
.atribute {
  flex: 1 0 0;
}

.paragraph {
  flex: 1 0 0;
}
</style>

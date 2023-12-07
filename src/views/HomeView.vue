<script setup lang="ts">
import pokemonCards from '@/components/pokemonCards.vue'
import pokeBall from '@/components/icons/pokeBall.vue'
import searchIcon from '@/components/icons/searchIcon.vue'
import sortIcon from '@/components/icons/sortIcon.vue'
import { usePokemons } from '@/services/pokemon.service'
import { ref } from 'vue'
const { allPokemon ,pokemonId,pokemonName } = usePokemons()

let id = 0


const arrayOfPokemon = ref([])

for (let i = 0; i < allPokemon.value.length; i++) {
  arrayOfPokemon.value.push({ id:id++, name: pokemonName });
}


</script>

<template>
  <div class="pokedex-list flex h-screen flex-shrink-0 flex-col items-end bg-primary p-1">
    <div class="frame flex flex-col items-start gap-2 self-stretch px-3 pb-6 pt-3">
      <div class="title flex items-center gap-4 self-stretch">
        <pokeBall />
        <div class="header text-2xl font-bold text-white">Pokédex</div>
      </div>
      <div class="filters flex items-center gap-4 self-stretch">
        <div
          class="searchbar flex flex-1 items-center gap-2 rounded-2xl bg-white py-2 pl-3 pr-4 shadow-inner shadow-medium"
        >
          <searchIcon />
          <div class="w-full" contenteditable="true">
            <div class="search-text text-xs font-normal text-medium">search</div>
          </div>
        </div>
        <div class="sort-button">
          <sortIcon />
        </div>
      </div>
    </div>
    <div class="list">
      <div class="wrap-pokemons">
        <pokemonCards
        v-for="(pokemon,index) in arrayOfPokemon"
          :key="index"
          :name="pokemonName"
          :id="pokemonId"
          iconFilename="sprite"
        ></pokemonCards>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sort-button {
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 16px;
  background: var(--grayscale-white, #fff);

  /* Inner Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
}

.sort {
  width: 16px;
  height: 16px;
}

.wrap-pokemons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.list {
  display: flex;
  padding: 24px 12px 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--grayscale-white, #fff);
  /* Inner Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
}
</style>

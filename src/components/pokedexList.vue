<script setup lang="ts">
import pokemonCards from './pokemonCards.vue'
</script>

<template>
  <div class="pokedex-list flex flex-col items-end flex-shrink-1 bg-primary h-screen p-1">
    <div class="frame flex pt-3 px-3 pb-6 flex-col items-start gap-2 self-stretch">
      <div class="title flex items-center gap-4 self-stretch">
        <img class="pokeball w-6 h-6" src="../assets/pokeball.svg" alt="" />
        <div class="header text-white text-2xl font-bold">Pokédex</div>
      </div>
      <div class="filters flex items-center gap-4 self-stretch">
        <div
          class="searchbar bg-white shadow-inner shadow-medium rounded-2xl flex pr-4 py-2 pl-3 gap-2 items-center flex-1"
        >
          <img class="search h-4 w-4" src="../assets/search.svg" alt="" />
          <div class="search-text text-medium text-xs font-normal">search</div>
        </div>
        <div class="sort-button">
          <img class="sort" src="../assets/sort.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="list">
      <div class="wrap-pokemons">
        <pokemonCards icon-filename="bulbasaur.png"></pokemonCards>
        <pokemonCards icon-filename="bulbasaur.png"></pokemonCards>
        <pokemonCards icon-filename="bulbasaur.png"></pokemonCards>
        <pokemonCards icon-filename="bulbasaur.png"></pokemonCards>
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

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { usePokemons } from '@/services/pokemon.service'
const { pokemons } = usePokemons()

const id = ref('#999')
const pokemonName = ref(pokemons.value[0])

const props = defineProps({
  iconFilename: String
})

function getImageUrl() {
  return new URL(`../assets/sprites/${props.iconFilename}`, import.meta.url).toString()
}
</script>

<template>
  <div class="row">
    <div class="list-item">
      <div class="number">{{ id }}</div>
      <div class="pokemon-name">{{ pokemonName }}</div>
      <img class="silhoutte" :src="getImageUrl()" alt="" />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}

.number {
  display: flex;
  padding: 4px 8px 0px 8px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  color: var(--grayscale-medium, #666);
  text-align: right;

  /* Body/Caption */
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 150% */
}
.list-item {
  display: flex;
  width: 104px;
  height: 108px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--grayscale-white, #fff);
  /* Drop Shadow/2 dp */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
}

.silhoutte {
  width: 72px;
  height: 72px;
  position: absolute;
  margin-top: 16px;
}

.pokemon-name {
  display: flex;
  padding: 24px 8px 4px 8px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 7px;
  background: var(--grayscale-background, #efefef);
  color: var(--grayscale-dark, #1d1d1d);

  /* Body/Body 3 */
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
}
</style>

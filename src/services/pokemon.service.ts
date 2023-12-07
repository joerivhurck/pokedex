import {  ref, type Ref } from 'vue'


interface Pokemon {
  name: string
  url: string
  id: number
  sprite: string
}
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

const pokemonId = ref()
const pokemonName = ref("")
const allPokemon: Ref<Array<Pokemon>> = ref([])
const randomPokemon = ref()
const selectedPokemon = ref([])
const detailsPokemon = ref()


//const pokemonSprite =  ref("")
//const  = ref([])

const usePokemons = () => {
  const fetchAllPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.map((pokemon: Pokemon) => pokemon)
    allPokemon.value = results
  }

  const fetchRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * allPokemon.value.length)
    randomPokemon.value = allPokemon.value[randomIndex]
    pokemonName.value = randomPokemon.value.name
  }

  const detailsRandomPokemon = async () => {
    const response = await fetch(randomPokemon.value.url)
    const json = await response.json()
    detailsPokemon.value = json
    pokemonId.value = detailsPokemon.value.id
  }

  const fetchAndSelectRandomPokemon = async () => {
    await fetchAllPokemons()
    await fetchRandomPokemon()
    await detailsRandomPokemon()
  }
  //fetchAndSelectRandomPokemon()

  return {
    detailsPokemon,
    allPokemon,
    randomPokemon,
    selectedPokemon,
    pokemonName,
    pokemonId,
    fetchAllPokemons,
    fetchRandomPokemon,
    detailsRandomPokemon,
    fetchAndSelectRandomPokemon
  }
}

export { usePokemons }

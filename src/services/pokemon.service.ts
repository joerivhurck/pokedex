import { readonly, ref, type Ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}
const url = 'https://pokeapi.co/api/v2/pokemon'

//const pokemonId = ref()
const allPokemon: Ref<Array<pokemon>> = ref([])
const randomPokemon  = ref<Pokemon | null>(null)
const selectedPokemon = ref([])

const pokemonId = ref()
//const pokemonName = ref("")
//const pokemonSprite =  ref("")
//const  = ref([])

const usePokemons = () => {
  const fetchAllPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.map((pokemon: Pokemon) => pokemon)
    allPokemon.value = results
    console.log(allPokemon.value)
  }

  const fetchRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * allPokemon.value.length)
    randomPokemon.value = allPokemon.value[randomIndex]
    console.log(randomPokemon.value)
  }

  const selectRandomPokemon = async () => {
    const response = await fetch(randomPokemon.value.url)
    const json = await response.json()
     console.log(selectedPokemon)
    /*urlPokemon.value = json
    console.log(urlPokemon.value)*/
  }



  return {
    randomPokemon,
    allPokemon,
    selectedPokemon,
    fetchAllPokemons,
    fetchRandomPokemon,
    selectRandomPokemon
  }
}

export { usePokemons }

import { ref, type Ref } from 'vue'

interface Pokemon {
  name: string
  url: string
  id: number
  sprite: string
}

interface PokemonList {
  list : Array<Pokemon>
}
let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

const pokemonId = ref(0)
const pokemonName = ref('')
const allPokemon: Ref<PokemonList> = ref([])
const randomPokemon = ref()
const selectedPokemon = ref([])
const detailsPokemon = ref()
const arrayOfPokemon = ref([{ id: pokemonId.value, name: pokemonName.value}])
let count = ref(0)

//const pokemonSprite =  ref("")
//const  = ref([])

const usePokemons = () => {
  const fetchAllPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.map((pokemon: Pokemon) => pokemon)
   
    for(let i = 0;i<results.length;i++){
      console.log(results[i])
      url = results[i].url
      console.log(url)
    }
   
  }

  const fetchRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * allPokemon.value.length)
    randomPokemon.value = allPokemon.value[randomIndex]
    pokemonName.value = randomPokemon.value.name
    console.log(pokemonName.value)
  }

  const detailsRandomPokemon = async () => {
    const response = await fetch(randomPokemon.value.url)
    const json = await response.json()
    detailsPokemon.value = json
    pokemonId.value = detailsPokemon.value.id
    //console.log(pokemonId.value)
  }

  const makeNewArr = () => {
   
    for (let i = 0; i < allPokemon.value.length; i++) {
      
      arrayOfPokemon.value.push({ id: pokemonId.value, name: pokemonName.value })
    }
    
  }

  const fetchAndSelectRandomPokemon = async () => {
    await fetchAllPokemons()
    await fetchRandomPokemon()
    await detailsRandomPokemon()
  }
  
 /* function loopArr(){
    for(let i = 0;i<allPokemon.value.length;i++){
      fetchAndSelectRandomPokemon()
      console.log(arrayOfPokemon)
    }
  }*/

  return {
    detailsPokemon,
    allPokemon,
    randomPokemon,
    selectedPokemon,
    pokemonName,
    pokemonId,
    arrayOfPokemon,
    fetchAllPokemons,
    fetchRandomPokemon,
    detailsRandomPokemon,
    fetchAndSelectRandomPokemon,
    makeNewArr,
    
  }
}

export { usePokemons }

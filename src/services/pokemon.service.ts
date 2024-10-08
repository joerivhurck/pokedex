import { ref } from 'vue'
interface Stat {
  base_stat: number;
}

interface Move {
  move: string;
}

interface Ability {
  name: string;
 }

interface Type {
  slot: number;
  type: Ability;
}

interface Pokemon {
  name: string
  url: string
  id: number
  sprite: string
  ///types : string
  weight : number
  height : number
  stats : Stat
  moves : Move
  types : Type
}



const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=20'

const allPokemon = ref<Pokemon[]>([])
const moveNames = ref<string[]>([])

const usePokemons = () => {
  const fetchAllPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results
   
    for (let i = 0; i < results.length; i++) {
      const pokemonUrl = results[i].url

      const pokemonResponse = await fetch(pokemonUrl)
      const pokemonJson = await pokemonResponse.json()

      const pokemonDetails: Pokemon = {
        name: pokemonJson.name,
        url: pokemonJson.sprites.front_default,
        id: pokemonJson.id,
        sprite: pokemonJson.sprites.front_default,
        weight : pokemonJson.weight,
        height : pokemonJson.height,
        stats : pokemonJson.stats,
        moves : pokemonJson.moves,  
        types : pokemonJson.types
      }
      
      allPokemon.value.push(pokemonDetails)
    }
    shuffleArray(allPokemon.value)
  }

  function shuffleArray(array: Pokemon[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

 

  return {
    allPokemon,
    fetchAllPokemons,
    moveNames,
   }
}

export { usePokemons }

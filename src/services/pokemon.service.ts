import { ref } from 'vue'

interface Pokemon {
  name: string
  url: string
  id: number
  sprite: string
}

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=20'

const allPokemon = ref<Pokemon[]>([])

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
        sprite: pokemonJson.sprites.front_default
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
    fetchAllPokemons
   }
}

export { usePokemons }

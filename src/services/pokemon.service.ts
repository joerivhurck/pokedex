import { readonly, ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}
const url = 'https://pokeapi.co/api/v2/pokemon/'

const selectedPokemon = ref('')


const usePokemons = () => {
  const fetchRandomPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.map((pokemon : Pokemon) => pokemon.name)
    const randomIndex = Math.floor(Math.random() * results.length)
    selectedPokemon.value = results[randomIndex]
    console.log(results[randomIndex])
  }

  return {
    selectedPokemon: readonly(selectedPokemon),
    fetchRandomPokemons
  }
}

export { usePokemons }

import { readonly, ref } from 'vue'

interface Pokemon {
  name: string
  url: string
}

const pokemons = ref([])

const url = 'https://pokeapi.co/api/v2/pokemon/'

const usePokemons = () => {
  const fetchPokemons = async () => {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results.map((pokemon: Pokemon) => pokemon.name)
    pokemons.value = results
  }

  return {
    pokemons: readonly(pokemons),
    fetchPokemons
  }
}

export { usePokemons }

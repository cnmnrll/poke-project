import { pokemons } from "../pokemons";

var pokemon_idx;

while (true) {
  pokemon_idx = Math.floor(Math.random() * 16);
  if (!localStorage.getItem(pokemons[pokemon_idx].name)) {
    break;
  }
}

export { pokemon_idx };

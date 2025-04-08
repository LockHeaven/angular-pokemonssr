const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

(async () => {
  console.log("Prerendering routes...");

  const fs = require("fs");

  //  Por Id's de Pokemons
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  let fileContent = pokemonIds.map((id) => `/pokemons/${id}`).join("\n");

  // Paginas de Pokemons
  const pokemonPages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
  fileContent +=
    "\n" + pokemonPages.map((page) => `/pokemons/page/${page}`).join("\n");

  // Por nombres de pokemons
  const pokemonListNames = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((res) => res.json());

  fileContent +=
    "\n" +
    pokemonListNames.results
      .map((pokemon) => `/pokemons/${pokemon.name}`)
      .join("\n");

  fs.writeFileSync("routes.txt", fileContent);

  console.log("Routes generated");
})();

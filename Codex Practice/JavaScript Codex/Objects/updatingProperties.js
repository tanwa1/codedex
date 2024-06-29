const pokemon = {
  name: "Pikachu",
  type: "Electric ⚡️",
  level: 25,
};
(pokemon.isCaught = false), console.log(pokemon.isCaught);

pokemon.name = "Suicune";
pokemon.isCaught = true;

console.log(pokemon);

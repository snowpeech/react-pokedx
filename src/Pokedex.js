import React from "react";
import Pokecard from "./Pokecard";
import pokeArr from "./pokemonArr";

const Pokedex = ({ pokemon = pokeArr }) => {
  return <div>{pokemon.map((p) => Pokecard(p))}</div>;
};

export default Pokedex;

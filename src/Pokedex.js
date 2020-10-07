import React from "react";
import Pokecard from "./Pokecard";
import pokeArr from "./pokemonArr";
import "./pokedex.css";

const Pokedex = ({ hand = pokeArr, experience, isWinner }) => {
  return (
    <div className='pokedex'>
      <h1 className='title'> Pokedex</h1>
      <div className='pokedex-hand'> {hand.map((p) => Pokecard(p))} </div>
      <div>Total experience: {experience}</div>
      <b>{isWinner ? "You Win!" : ""}</b>
    </div>
  );
};

export default Pokedex;

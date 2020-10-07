import React from "react";
import Pokedex from "./Pokedex";
import pokeArr from "./pokemonArr";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Pokegame should take your list of 8 pokemon and randomly assign them into two hands of 4 cards each. It should then render two Pokedex components, one for each hand.

shuffle(pokeArr);

let hand1 = pokeArr.slice(0, 4);
let hand2 = pokeArr.slice(4);

//calculate experience of each hand
// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
// return accumulator + currentValue
//   })
let exp1 = hand1.reduce((sum, pokemon) => {
  return sum + pokemon.base_experience;
}, 0);

let exp2 = hand2.reduce((sum, pokemon) => {
  return sum + pokemon.base_experience;
}, 0);

const Pokegame = (props) => {
  return (
    <>
      <Pokedex
        hand={hand1}
        experience={exp1}
        isWinner={exp1 > exp2 ? true : false}
      ></Pokedex>
      <Pokedex
        hand={hand2}
        experience={exp2}
        isWinner={exp2 > exp1 ? true : false}
      ></Pokedex>
    </>
  );
};

export default Pokegame;

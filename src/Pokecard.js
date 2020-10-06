import React from "react";
import "./pokecard.css";

const pokeApi =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ id, name, type, base_experience }) => {
  let pokePic = `${pokeApi}${id}.png`;

  return (
    <div className='Pokecard-card'>
      <h3 className='Pokecard-name'>{name}</h3>
      <img src={pokePic} className='Pokecard-img' alt={name}>
        {" "}
      </img>
      <div className='Pokecard-stats'>
        Type: {type} <br></br>
        EXP: {base_experience}
      </div>
    </div>
  );
};

export default Pokecard;

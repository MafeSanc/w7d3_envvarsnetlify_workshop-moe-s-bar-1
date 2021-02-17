import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [pokemon, setpokemon] = useState ({});
const [id, setId] = useState(1);


 
  let data;

  useEffect(() => {
    async function getPokemon() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
      data = await response.json();
      console.log(data);
      setpokemon(data);
    }
    getPokemon();
  }, [id]);

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(Math.floor(Math.random() * Math.floor(151)));
    
  }

  return (
    <div className="App">
      <h1>Get a Pokemon!</h1>
      <h2>Name: {pokemon.name}</h2>
      <img src={pokemon.sprites?.front_default} />
      <button onClick={() => handleClick()}>Get next pokemon</button>
      
    </div>
  );

}

export default App;

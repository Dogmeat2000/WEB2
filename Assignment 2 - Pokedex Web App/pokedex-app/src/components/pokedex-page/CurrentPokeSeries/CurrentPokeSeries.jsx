import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard.jsx';
import '../../../assets/styles/pokedex-overview.css';

function CurrentPokeSeries({ cardsToDisplayTotal, currentlyDisplayFirstPokemonIndex, maxPokemonIndex}) {
  const [displayedPokemonList, setDisplayedPokemonList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upperPokemonDisplayLimit, setUpperPokemonDisplayLimit] = useState(currentlyDisplayFirstPokemonIndex + cardsToDisplayTotal);
 
  async function getPokemonList(limit, offset) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      if(!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`)
      }
      return await response.json();

    } catch (error) {
      console.error('Could not fetch pokemons:', error);
      throw error;
    }
  }


  // This sets the state on load first load:
  // useEffect is needed to leverage async functionality in react!
  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      setError(null);
      setUpperPokemonDisplayLimit(() => {
        return Math.min(
          currentlyDisplayFirstPokemonIndex + cardsToDisplayTotal, 
          maxPokemonIndex
        );
      });
      try {
        const data = await getPokemonList(cardsToDisplayTotal, currentlyDisplayFirstPokemonIndex-1);
        // Need to subtract -1, since currentlyDisplayFirstPokemonIndex initially points to index '1', 
        // but the first pokemon in the loaded data gets the index '0' in the loaded json array.
        setDisplayedPokemonList(data.results);

      } catch (err) {
        setError(`Failed to fetch Pokémon list.\nError:${err}`);

      } finally {
        setLoading(false);
      }
    };
    fetchPokemonList();
  }, [cardsToDisplayTotal, currentlyDisplayFirstPokemonIndex, maxPokemonIndex]);
  // Note to self: The dependency array above [] contains the variables that would cause the useEffect function to fire (and reload), when changed.


  // What to display, while loading:
  if (loading) {
    return (
      <>
        <div>Displaying Pokemons No. {currentlyDisplayFirstPokemonIndex} to {currentlyDisplayFirstPokemonIndex+cardsToDisplayTotal} of {maxPokemonIndex}</div>
        <p>Loading Pokémons...</p>
      </>
    );
  }


  // What to display if an error occurs:
  if (error) {
    return (
      <>
        <div>Displaying Pokemons No. {currentlyDisplayFirstPokemonIndex} to {currentlyDisplayFirstPokemonIndex+cardsToDisplayTotal} of {maxPokemonIndex}</div>
        <p>{error}</p>
      </>
    );
  }


  // Contents to render in the Pokemon list:
  let pokemonContent;
  if (displayedPokemonList && displayedPokemonList.length > 0) {
    pokemonContent = displayedPokemonList.map((pokemon, index) => {
      return (
        <PokemonCard
          key = {index}
          pokemonName = {pokemon.name}
          pokemonUrl = {pokemon.url}
        />
      )
    })
  } else {
    pokemonContent = <p>No Pokémon to display.</p>;
  }

  
  // What to display when everything is loaded:
  return (
    <>
      <div>Displaying Pokemons No. {currentlyDisplayFirstPokemonIndex} to {upperPokemonDisplayLimit} of {maxPokemonIndex}</div>

      <div className="cardSeriesDisplayFormat">
        {pokemonContent}
      </div>
    </>
  )
}
  
export default CurrentPokeSeries
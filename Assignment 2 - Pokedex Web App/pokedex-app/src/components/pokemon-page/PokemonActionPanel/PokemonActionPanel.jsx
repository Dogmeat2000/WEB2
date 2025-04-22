import { useState, useEffect } from 'react';
import PokemonActionGif from './PokemonActionGif.jsx'
import '../../../assets/styles/pokemon-details-page.css'


function PokemonActionPanel( { pokemonData } ) {

  const [pokemonHeight, setPokemonHeight] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This sets the state on load first load:
  // useEffect is needed to leverage async functionality in react!
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        // Load spriteUrl:
        const gif_url = pokemonData?.sprites?.other?.showdown?.front_default
        if(gif_url != null) {
          setGifUrl(pokemonData?.sprites?.other?.showdown?.front_default);
        } else {
          setGifUrl(pokemonData?.sprites?.other["official-artwork"]?.front_default);
        }

        // Load other data:
        setPokemonHeight(pokemonData?.height/10);

      } catch (err) {
          setError(`Failed to load Pokémon.\nError:${err}`);

      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [pokemonData]);
  // Note to self: The dependency array above [] contains the variables that would cause the useEffect function to fire (and reload), when changed.
  
  
  // What to display, while loading:
  if (loading) {
    return (
        <p>Loading Pokémon...</p>
    );
  }
  
  
  // What to display if an error occurs:
  if (error) {
    return (
        <p>{error}</p>
    );
  }
  
  
  // Contents to render in the Stats Panel:
  return (
    <>
      <PokemonActionGif 
        pokemonGifUrl={gifUrl}
        currentPokemonHeight={pokemonHeight}
        primaryPokemonType={pokemonData?.types[0].type?.name}
      />
    </>
  )
}
  
export default PokemonActionPanel
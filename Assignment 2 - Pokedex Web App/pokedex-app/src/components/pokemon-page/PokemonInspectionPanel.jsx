import { useState, useEffect } from 'react';
import PokemonNavigationBar from './PokemonNavigationBar/PokemonNavigationBar.jsx'
import PokemonActionPanel from './PokemonActionPanel/PokemonActionPanel.jsx'
import PokemonStatsPanel from './PokemonStatsPanel/PokemonStatsPanel.jsx'
import '../../assets/styles/pokemon-details-page.css'


function PokemonInspectionPanel ({ currentPokemonIndex, maxPokemonIndex }) {

  const [displayedPokemon, setDisplayedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let baseFetchUrl = "https://pokeapi.co/api/v2/pokemon/";


  async function getPokemon(baseUrl, pokemonIndex) {
      try {
        const response = await fetch(`${baseUrl + pokemonIndex}`);
        if(!response.ok) {
          throw new Error(`Http error! Status: ${response.status}`)
        }
        return await response.json();
  
      } catch (error) {
          console.error('Could not fetch pokemon:', error);
          throw error;
      }
  }

  // This sets the state on load first load:
  // useEffect is needed to leverage async functionality in react!
  useEffect(() => {
      const fetchPokemon = async () => {
          setLoading(true);
          setError(null);
          
          try {
              const data = await getPokemon(baseFetchUrl, currentPokemonIndex);
              setDisplayedPokemon(data);
              

      } catch (err) {
          setError(`Failed to fetch Pokémon.\nError:${err}`);

      } finally {
          setLoading(false);
      }
      };
      fetchPokemon();
  }, [currentPokemonIndex, baseFetchUrl]);
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


  // Contents to render in the Pokemon card:
  return (
    <>
      <div className="pokemonDetailsContainer">
        <div className="pokemonStatsPanelContainer">
          <PokemonStatsPanel 
            pokemonData={displayedPokemon}
          />
        </div>

        <div className="pokemonActionPanelContainer">
          <PokemonActionPanel 
            pokemonData={displayedPokemon}
          />
        </div>
      </div>

      <div>
        <PokemonNavigationBar 
            currentlyDisplayedPokemonIndex={currentPokemonIndex}
            maxPokemonIndex={maxPokemonIndex}
        />
      </div>    
    </>
  )
}
  
export default PokemonInspectionPanel
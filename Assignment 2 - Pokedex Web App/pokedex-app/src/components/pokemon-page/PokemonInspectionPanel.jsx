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

  function determineBackground(pokemonType, pokemonHeight){
    let className = "pokemonActionPanelContainer pokemonActionPanelContainer_Background ";
    
    switch (pokemonType) {
      case 'bug':
          if(pokemonHeight < 0.5) {
            className += "pokemonActionPanelContainer_Background_Small_Bug";
          } else if (pokemonHeight < 2) {
            className += "pokemonActionPanelContainer_Background_Medium_Bug";
          } else {
            className += "pokemonActionPanelContainer_Background_Large_Bug";
          }
        break;

      case "dark":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Dark";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Dark";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Dark";
        }
      break;

      case "dragon":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Dragon";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Dragon";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Dragon";
        }
      break;

      case "electric":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Electric";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Electric";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Electric";
        }
      break;

      case "fairy":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Fairy";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Fairy";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Fairy";
        }
      break;

      case "fighting":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Fighting";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Fighting";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Fighting";
        }
      break;

      case "fire":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Fire";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Fire";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Fire";
        }
      break;

      case "flying":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Flying";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Flying";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Flying";
        }
      break;

    case "ghost":
      if(pokemonHeight < 0.5) {
        className += "pokemonActionPanelContainer_Background_Small_Ghost";
      } else if (pokemonHeight < 2) {
        className += "pokemonActionPanelContainer_Background_Medium_Ghost";
      } else {
        className += "pokemonActionPanelContainer_Background_Large_Ghost";
      }
    break;

      case "grass":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Grass";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Grass";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Grass";
        }
      break;

      case "ground":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Ground";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Ground";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Ground";
        }
      break;

      case "ice":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Ice";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Ice";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Ice";
        }
      break;

      case "normal":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Normal";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Normal";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Normal";
        }
      break;

      case "poison":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Poison";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Poison";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Poison";
        }
      break;

      case "psychic":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Psychic";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Psychic";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Psychic";
        }
      break;

      case "rock":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Rock";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Rock";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Rock";
        }
      break;

      case "steel":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Steel";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Steel";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Steel";
        }
      break;

      case "stellar":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Stellar";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Stellar";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Stellar";
        }
      break;

      case "water":
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Water";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Water";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Water";
        }
      break;
    
      default:
        if(pokemonHeight < 0.5) {
          className += "pokemonActionPanelContainer_Background_Small_Unknown";
        } else if (pokemonHeight < 2) {
          className += "pokemonActionPanelContainer_Background_Medium_Unknown";
        } else {
          className += "pokemonActionPanelContainer_Background_Large_Unknown";
        }
        break;
    }

    return className;
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
        
        <div className={determineBackground(displayedPokemon?.types[0].type?.name, (displayedPokemon?.height/10))}>
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
import { useState, useEffect } from 'react';
import PokemonName from './PokemonName.jsx'
import PokemonIndex from './PokemonIndex.jsx'
import PokemonStatsTable from './PokemonStats/PokemonStatsTable.jsx'
import PokemonTypeRow from './PokemonTypeRow.jsx'
import '../../../assets/styles/pokemon-details-page.css'


function PokemonStatsPanel( { pokemonData } ) {
  const [name, setName] = useState(null);
  const [index, setIndex] = useState(null);
  const [hitPoints, setHitPoints] = useState(null);
  const [attackPoints, setAttackPoints] = useState(null);
  const [defensePoints, setDefensePoints] = useState(null);
  const [specialAttackPoints, setSpecialAttackPoints] = useState(null);
  const [specialDefensePoints, setSpecialDefensePoints] = useState(null);
  const [speedPoints, setSpeedPoints] = useState(null);
  const [types, setTypes] = useState(null);
  const [height, setHeight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This sets the state on load first load:
  // useEffect is needed to leverage async functionality in react!
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        // Load stats:
        setName(pokemonData?.name);
        setIndex(pokemonData?.id);
        setHitPoints(pokemonData?.stats?.find(obj => obj.stat.name === "hp")?.base_stat);
        setAttackPoints(pokemonData?.stats?.find(obj => obj.stat.name === "attack")?.base_stat);
        setDefensePoints(pokemonData?.stats?.find(obj => obj.stat.name === "defense")?.base_stat);
        setSpecialAttackPoints(pokemonData?.stats?.find(obj => obj.stat.name === "special-attack")?.base_stat);
        setSpecialDefensePoints(pokemonData?.stats?.find(obj => obj.stat.name === "special-defense")?.base_stat);
        setSpeedPoints(pokemonData?.stats?.find(obj => obj.stat.name === "speed")?.base_stat);
        setHeight(pokemonData?.height)

        // Load type(s):
        setTypes(pokemonData?.types);

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
      <div className="pokeNameAndIndexContainer">
        <div className="pokeStats_Name">
          <PokemonName
            name={name}
          />
        </div>

        <div className="pokeIndex">
          <PokemonIndex 
            index={index}
          />
        </div>
      </div>

      <div className="">
        <div className="">
          <PokemonStatsTable 
            hp={hitPoints}
            attack={attackPoints}
            defense={defensePoints}
            specialAttack={specialAttackPoints}
            specialDefense={specialDefensePoints}
            speed={speedPoints}
            height={height}
          />
        </div>

      </div>

      <div className="pokeTypeHeader">Type:</div>
      <div className="pokeTypeContainer">
        <PokemonTypeRow 
          typeData={types}
        />
      </div>
    </>
  )
}
  
export default PokemonStatsPanel
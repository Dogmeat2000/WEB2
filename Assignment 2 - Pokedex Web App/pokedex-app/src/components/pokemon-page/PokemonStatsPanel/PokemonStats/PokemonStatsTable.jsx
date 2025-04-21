import { useState, useEffect } from 'react';
import PokemonStatsRow from './PokemonStatsRow.jsx'
import PokemonStatsHeader from './PokemonStatsHeader.jsx'
import '../../../../assets/styles/pokemon-details-page.css'

function PokemonStatsTable( { hp, attack, defense, specialAttack, specialDefense, speed, height } ) { 
    const [hitPoints, setHitPoints] = useState(null);
    const [attackPoints, setAttackPoints] = useState(null);
    const [defensePoints, setDefensePoints] = useState(null);
    const [specialAttackPoints, setSpecialAttackPoints] = useState(null);
    const [specialDefensePoints, setSpecialDefensePoints] = useState(null);
    const [speedPoints, setSpeedPoints] = useState(null);
    const [heightPoints, setHeight] = useState(null);
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
                setHitPoints(hp);
                setAttackPoints(attack);
                setDefensePoints(defense);
                setSpecialAttackPoints(specialAttack);
                setSpecialDefensePoints(specialDefense);
                setSpeedPoints(speed);
                setHeight(height)

            } catch (err) {
                setError(`Failed to load Pokémon.\nError:${err}`);

            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();
    }, [hp, attack, defense, specialAttack, specialDefense, speed, height]);
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
    <div className="pokeStatTableContainer">
        <PokemonStatsHeader
            title={"Stats:"}
        />

        <PokemonStatsRow 
            name={"HP"}
            maxValue={255}
            value={hitPoints}
        />

        <PokemonStatsRow 
            name={"Attack"}
            maxValue={255}
            value={attackPoints}
        />

        <PokemonStatsRow 
            name={"Defense"}
            maxValue={255}
            value={defensePoints}
        />

        <PokemonStatsRow 
            name={"Sp. Atk."}
            maxValue={255}
            value={specialAttackPoints}
        />

        <PokemonStatsRow 
            name={"Sp. Def."}
            maxValue={255}
            value={specialDefensePoints}
        />

        <PokemonStatsRow 
            name={"Speed"}
            maxValue={255}
            value={speedPoints}
        />

    <PokemonStatsRow 
            name={"Height(m)"}
            maxValue={75}
            value={heightPoints/10}
        />

    </div>
    </>
    )
}
  
export default PokemonStatsTable
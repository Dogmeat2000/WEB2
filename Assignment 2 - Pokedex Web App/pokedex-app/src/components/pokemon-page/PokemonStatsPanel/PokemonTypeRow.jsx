import { useState, useEffect } from 'react';
import PokemonType from '../../pokedex-page/CurrentPokeSeries/PokemonCard/PokemonType.jsx';
import '../../../assets/styles/pokemon-overview-card.css'

function PokemonTypeRow( { typeData } ) { 
    const [typeElement, setTypeElement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // This sets the state on load first load:
    // useEffect is needed to leverage async functionality in react!
    useEffect(() => {
        const fetchPokemon = async () => {
        setLoading(true);
        setError(null);

        try {
            setTypeElement(typeData?.map((typeObject, index) => {
                return (
                    <PokemonType
                    key={index}
                    type = {typeObject.type.name}
                    />
                )
            }))
        } catch (err) {
            setError(`Failed to load Pokémon.\nError:${err}`);

        } finally {
            setLoading(false);
        }
        };
        fetchPokemon();
    }, [typeData]);
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
        {typeElement}
    </>
    )
}
  
export default PokemonTypeRow
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import PokemonIndex from './PokemonCard/PokemonIndex.jsx';
import PokemonSprite from './PokemonCard/PokemonSprite.jsx';
import PokemonType from './PokemonCard/PokemonType.jsx';
import '../../../assets/styles/pokemon-overview-card.css'

function PokemonCard({ pokemonName, pokemonUrl}) {
    const cardRef = useRef(null);
    const [id, setId] = useState(null);
    const [displayedPokemon, setDisplayedPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function getPokemon(url) {
        try {
          const response = await fetch(`${url}`);
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
                const data = await getPokemon(pokemonUrl);
                setDisplayedPokemon(data);
                setId(data?.id);
                

        } catch (err) {
            setError(`Failed to fetch Pokémon.\nError:${err}`);

        } finally {
            setLoading(false);
        }
        };
        fetchPokemon();
    }, [pokemonUrl]);
    // Note to self: The dependency array above [] contains the variables that would cause the useEffect function to fire (and reload), when changed.

    // Navigation to open specific pokemon page on click
    const navigate = useNavigate();
    const goToPokemonPage = () => {
        navigate(`/pokedex/${id}`);
    }


    let pokemonTypeElement = displayedPokemon?.types?.map((typeObject, index) => {
        return (
            <PokemonType
            key={index}
            type = {typeObject.type.name}
            />
        )
    })


    // Methods to add some 'awesome-ness' to each displayed 'card' :)
    // Handle mouse movement to create the tilt effect
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Calculate the mouse position relative to the center of the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate the tilt angles based on mouse position
        const rotateX = ((mouseY - centerY) / centerY) * 10;
        const rotateY = -((mouseX - centerX) / centerX) * 10;

        // 3D rotation
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateZ(10px)`;
    };


    // Reset the transform when the mouse leaves the card
    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };


    // Ensure the card pops out slightly when the mouse enters
    const handleMouseEnter = () => {
        const card = cardRef.current;
        card.style.transform = 'scale(1.05) translateZ(10px)';
    };


    // What to display, while loading:
    if (loading) {
        return (
            <p className="pokeCard">Loading Pokémon...</p>
        );
    }


    // What to display if an error occurs:
    if (error) {
        return (
            <p className="pokeCard">{error}</p>
        );
    }


    // Contents to render in the Pokemon card:
    return (
        <>
            {console.log("loaded this pokemon:\n ", displayedPokemon)}

            <div className="pokeCard" ref={cardRef}
            data-testid="pokeCard"
            role="button"
            onMouseMove={handleMouseMove} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={goToPokemonPage}>
                
                <div className="pokeTypeSpriteContainer">
                    <div className="pokeSprite">
                        <PokemonSprite
                            pokemonSpriteUrl={displayedPokemon.sprites.other["official-artwork"].front_default}
                            pokemonName={pokemonName}
                        />
                    </div>
                </div>
                
                <div className="pokeTextContainer">

                    <div className="pokeIndex">
                        <PokemonIndex
                            pokemonIndex={id}
                        />
                    </div>

                    <div className="pokeName">
                        <h4><b>{pokemonName}</b></h4>
                    </div>

                </div>

                <div className="pokeTypeElementContainer">
                    {pokemonTypeElement}
                </div>
                    

            </div>
        </>
    )
}
  
export default PokemonCard
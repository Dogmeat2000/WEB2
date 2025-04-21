import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import Header from '../components/shared/header/Header'
import PokemonInspectionPanel from '../components/pokemon-page/PokemonInspectionPanel.jsx'
import Footer from '../components/shared/footer/Footer'

function PokemonPage() {
  // This extracts the index parameter from the url (i.e. /pokedex/1, extracts '1')
  const { index } = useParams();
  const navigate = useNavigate();

  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(index)
  const [maxPokemonIndex, setMaxPokemonIndex] = useState(150);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getPokemonCount() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
      if(!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`)
      }
      const data = await response.json();
      return data.count;

    } catch (error) {
      console.error('Could not fetch pokemon count:', error);
      throw error;
    }
  }

  // This sets the state on load first load:
  // useEffect is needed to leverage async functionality in react!
  useEffect(() => {
    // First, I'll check if the index is valid. If not, redirect to a valid page.
    if(!/^\d+$/.test(index)) {
      navigate('/exception/invalid-id', { replace: true });
    } else {
      setCurrentPokemonIndex(index);
    }

    const fetchPokemonCount = async () => {
      setLoading(true);
      setError(null);
      try {
        const count = await getPokemonCount();
        setMaxPokemonIndex(count);

      } catch (err) {
        setError(`Failed to fetch Pokémon count.\nError:${err}`);

      } finally {
        setLoading(false);
      }
    };
    fetchPokemonCount();
  }, [index, navigate]);


  // What to display, while loading:
  if (loading) {
    return (
      <>
        <Header />
        <p>Loading Pokémon data...</p>
        <Footer />
      </>
    );
  }


  // What to display if an error occurs:
  if (error) {
    return (
      <>
        <Header />
        <p>{error}</p>
        <Footer />
      </>
    );
  }

    return (
      <>
        <Header />
        <PokemonInspectionPanel
          currentPokemonIndex={currentPokemonIndex}
          maxPokemonIndex={maxPokemonIndex}
        />
        <Footer />
      </>
    )
  }
  
  export default PokemonPage
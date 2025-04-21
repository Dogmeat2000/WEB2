import { useState, useEffect } from 'react';
import Header from '../components/shared/header/Header'
import PokedexOverview from '../components/pokedex-page/PokedexOverview'
import Footer from '../components/shared/footer/Footer'

function PokedexPage() {
  const [cardsToDisplayTotal, setCardsToDisplayTotal] = useState(20);
  const [maxPokemonIndex, setMaxPokemonIndex] = useState(1025);
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
    setCardsToDisplayTotal(20);
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
  }, []);
  // Note to self: The dependency array above [] is empty, so this useEffect will only run once (on page load).
  // I could have added dependencies (values to observe) that would cause the useEffect to fire every time these change.
  // i.e. [dependency1, dependency2, etc.] would cause the useEffect to fire every time these dependencies change.


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

  
  // What to display when everything is loaded:
  return (
    <>
      <Header />
      <PokedexOverview 
        cardsToDisplayTotal={cardsToDisplayTotal}
        maxPokemonIndex={maxPokemonIndex}
      />
      <Footer />
    </>
  )
}
  
  export default PokedexPage
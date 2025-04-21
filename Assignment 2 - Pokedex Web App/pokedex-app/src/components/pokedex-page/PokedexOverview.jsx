import { useState } from 'react';
import OverviewNavigationBar from './OverviewNavigationBar/OverviewNavigationBar.jsx'
import CurrentPokeSeries from './CurrentPokeSeries/CurrentPokeSeries.jsx'

function PokedexOverview({ cardsToDisplayTotal, maxPokemonIndex }) {
  const [currentlyDisplayFirstPokemonIndex, setCurrentlyDisplayFirstPokemonIndex] = useState(1);

    const displayNextSeriesFunc = () => {
      setCurrentlyDisplayFirstPokemonIndex((prev) => prev + cardsToDisplayTotal);
    };

    const displayPreviousSeriesFunc = () => {
      setCurrentlyDisplayFirstPokemonIndex((prev) => Math.max(1, prev - cardsToDisplayTotal));
    };

    return (
      <>
        <div>
          <OverviewNavigationBar 
            currentlyDisplayFirstPokemonIndex={currentlyDisplayFirstPokemonIndex}
            maxPokemonIndex={maxPokemonIndex}
            cardsToDisplayTotal={cardsToDisplayTotal}
            displayNextSeriesFunc={displayNextSeriesFunc}
            displayPreviousSeriesFunc={displayPreviousSeriesFunc}
          />
        </div>
        <div>
          <CurrentPokeSeries 
            cardsToDisplayTotal={cardsToDisplayTotal}
            currentlyDisplayFirstPokemonIndex={currentlyDisplayFirstPokemonIndex}
            maxPokemonIndex={maxPokemonIndex}
          />
        </div>
        <div>
          <OverviewNavigationBar 
            currentlyDisplayFirstPokemonIndex={currentlyDisplayFirstPokemonIndex}
            maxPokemonIndex={maxPokemonIndex}
            cardsToDisplayTotal={cardsToDisplayTotal}
            displayNextSeriesFunc={displayNextSeriesFunc}
            displayPreviousSeriesFunc={displayPreviousSeriesFunc}
          />
        </div>    
      </>
    )
  }
  
  export default PokedexOverview
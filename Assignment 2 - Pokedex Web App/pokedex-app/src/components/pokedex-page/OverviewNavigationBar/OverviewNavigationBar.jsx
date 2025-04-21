import NextPokeSeriesButton from './NextPokeSeriesButton.jsx'
import PreviousPokeSeriesButton from './PreviousPokeSeriesButton.jsx'
import '../../../assets/styles/pokedex-overview.css'


function OverviewNavigationBar( { currentlyDisplayFirstPokemonIndex, maxPokemonIndex, cardsToDisplayTotal, displayNextSeriesFunc, displayPreviousSeriesFunc}) {

  const showPreviousButton = currentlyDisplayFirstPokemonIndex > 1;
  const showNextButton = currentlyDisplayFirstPokemonIndex + cardsToDisplayTotal <= maxPokemonIndex;

  return (
    <>
      {showPreviousButton && (<PreviousPokeSeriesButton displayPreviousSeriesFunc={displayPreviousSeriesFunc}/>)}
      
      {showNextButton && (<NextPokeSeriesButton displayNextSeriesFunc={displayNextSeriesFunc}/>)}
    </>
  )
}
  
export default OverviewNavigationBar
import NextPokemonButton from './NextPokemonButton.jsx'
import PreviousPokemonButton from './PreviousPokemonButton.jsx'
import '../../../assets/styles/pokemon-details-page.css'


function PokemonNavigationBar( { currentlyDisplayedPokemonIndex, maxPokemonIndex}) {

  const showPreviousButton = currentlyDisplayedPokemonIndex > 1 && currentlyDisplayedPokemonIndex <= maxPokemonIndex;
  const showNextButton = (parseInt(currentlyDisplayedPokemonIndex) + 1) <= maxPokemonIndex;

  return (
    <>
      {showPreviousButton && (<PreviousPokemonButton currentlyDisplayedPokemonIndex={currentlyDisplayedPokemonIndex}/>)}
      
      {showNextButton && (<NextPokemonButton currentlyDisplayedPokemonIndex={currentlyDisplayedPokemonIndex}/>)}
    </>
  )
}
  
export default PokemonNavigationBar
import { HiArrowRight } from "react-icons/hi";
import {useNavigate} from 'react-router-dom'
import '../../../assets/styles/pokedex-overview.css'

function NextPokemonButton( { currentlyDisplayedPokemonIndex } ) { 
    const navigate = useNavigate();

    const goToNextPokemon = () => {
        navigate("/pokedex/" + (parseInt(currentlyDisplayedPokemonIndex) + 1));
    }

    return (
        <button type="button" className="ButtonWidth" onClick={goToNextPokemon}>
            <div className="ButtonContentsInline">
                <p>Next</p>
                <HiArrowRight />
            </div>
        </button>
    )
  }
  
  export default NextPokemonButton
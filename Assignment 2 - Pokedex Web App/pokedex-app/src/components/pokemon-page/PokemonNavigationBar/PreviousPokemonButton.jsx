import { HiArrowLeft } from "react-icons/hi";
import {useNavigate} from 'react-router-dom'
import '../../../assets/styles/pokedex-overview.css'

function PreviousPokemonButton( { currentlyDisplayedPokemonIndex } ) { 
    const navigate = useNavigate();

    const goToPreviousPokemon = () => {
        navigate("/pokedex/" + (parseInt(currentlyDisplayedPokemonIndex) - 1));
    }

    return (
        <button type="button" className="ButtonWidth" onClick={goToPreviousPokemon}>
            <div className="ButtonContentsInline">
                <HiArrowLeft />
                <p>Previous</p>
            </div>

        </button>
    )
  }
  
  export default PreviousPokemonButton
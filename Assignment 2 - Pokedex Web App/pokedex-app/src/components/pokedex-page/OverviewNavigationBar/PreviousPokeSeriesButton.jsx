import { HiArrowLeft } from "react-icons/hi";
import '../../../assets/styles/pokedex-overview.css'

function PreviousPokeSeriesButton( { displayPreviousSeriesFunc } ) { 

    return (
        <button type="button" className="ButtonWidth" onClick={displayPreviousSeriesFunc}>
            <div className="ButtonContentsInline">
                <HiArrowLeft />
                <p>Previous</p>
            </div>

        </button>
    )
  }
  
  export default PreviousPokeSeriesButton
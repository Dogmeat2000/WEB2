import { HiArrowRight } from "react-icons/hi";
import '../../../assets/styles/pokedex-overview.css'

function NextPokeSeriesButton( { displayNextSeriesFunc } ) { 

    return (
        <button type="button" className="ButtonWidth" onClick={displayNextSeriesFunc}>
            <div className="ButtonContentsInline">
                <p>Next</p>
                <HiArrowRight />
            </div>
        </button>
    )
  }
  
  export default NextPokeSeriesButton
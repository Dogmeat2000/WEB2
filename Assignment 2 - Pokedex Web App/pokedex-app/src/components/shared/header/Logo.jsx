import pokedexLogo from '/pokeball-logo_v2.svg'
import { Link } from 'react-router-dom'
import '../../../assets/styles/header.css'

function Logo() {

    return (
      <>
        <Link to="/"><img src={pokedexLogo} className="logo" alt="Pokedex Logo" /></Link>
      </>
    )
  }
  
  export default Logo
import '../../../assets/styles/header.css'
import Logo from './Logo.jsx'
import PokedexTitle from './PokedexTitle.jsx'
import NavigationButtons from './NavigationButtons.jsx'
import SearchBar from './SearchBar.jsx'

function Header() {

    return (
      <>
        {/* Container for the entire header:*/}
        <header className="headerContainer">

          {/* The right-most part of the header:*/}
          <div className="headerItemGroup headerItemFlexBasisLogo">
            <Logo />
          </div>
                    
          {/* The center part of the header:*/}
          <div className="headerItemGroup headerItemFlexGrowDouble headerItemFlexBasisTitle">
            <PokedexTitle />
          </div>

          {/* The left-most part of the header: */}
          <div className="headerItemGroup headerItemFlexGrowDouble headerItemFlexBasisNavBar">

            {/* Buttons to navigate to different areas of the webpage: */}
            <NavigationButtons />

            {/* Search bar to quickly search for a specific pokemon*/}
            <SearchBar />

          </div>
        </header>
      </>
    )
  }
  
  export default Header
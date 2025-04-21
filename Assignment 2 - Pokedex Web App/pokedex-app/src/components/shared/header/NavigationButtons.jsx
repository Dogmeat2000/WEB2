import {useNavigate} from 'react-router-dom'
import '../../../assets/styles/header.css'

function NavigationButtons() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  }

  const goToAboutPage = () => {
    navigate("/about");
  }

    return (
      <>
        <ul className="nav">
            <li>
                <button type="button" onClick={goToHomePage}>Home</button>
            </li>

            <li>
                <button type="button" onClick={goToAboutPage}>About</button>
            </li>
        </ul>
      </>
    )
}
  
export default NavigationButtons
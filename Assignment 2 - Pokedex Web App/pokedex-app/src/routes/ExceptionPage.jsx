import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/shared/header/Header'
import Footer from '../components/shared/footer/Footer'
import '../assets/styles/exception-page.css'

function ExceptionPage() {
  // This extracts the index parameter from the url (i.e. /pokedex/1, extracts '1')
  const { exceptionMsg } = useParams();
  const [msg, setMsg] = useState(exceptionMsg)


  useEffect(() => {
    setMsg(exceptionMsg);
    }, [exceptionMsg]);

  return (
    <>
      <Header />
      <h3>{msg}</h3>
      <div className="exceptionPageContainer">
      </div>
      <Footer />
    </>
  )
}

export default ExceptionPage
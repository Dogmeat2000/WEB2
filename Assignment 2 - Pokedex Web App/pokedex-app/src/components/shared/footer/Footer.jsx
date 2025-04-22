import '../../../assets/styles/footer.css'

function Footer() {

    return (
      <>
        <footer className="footer">
            <p>Developed by K. Dashnaw, VIA UC, Horsens, Denmark - Software Technology Engineering Studies (2025)</p>
            <p>Disclaimer: Created with 
                <a href='https://vite.dev/guide/' target='_blank'> Vite </a>, 
                <a href='https://react.dev/learn' target='_blank'> React </a> & 
                <a href='https://reactrouter.com/home' target='_blank'> React Router</a>. 
                Fetches pokemon information from the publicly available pokedex api
                <a href='https://pokeapi.co' target='_blank'> https://pokeapi.co</a></p>
                <p>Background images (and other supporting images) generated using <a href='https://stability.ai/news/introducing-stable-diffusion-3-5' target='_blank'>
                Stabile Diffusion 3.5 Large Turbo</a> running on local dev. environment</p>
        </footer>
      </>
    )
  }
  
  export default Footer
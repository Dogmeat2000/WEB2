import '../../assets/styles/about-page.css'

function PokedexOverview() {

  return (
    <>
    <div>
      <h1>About</h1>
      <p>This react based web app was created as part of an assignment during the WEB2 course at Via University College, Horsens.</p>
      <p>The assignment details are listed below</p>
      <br/> <br/>
      <h2>08 Assignment 2 - A Pokédex</h2>
      <p>In this assignment, you must create a Pokédex using React! A Pokédex is a catalog of Pokémon, that a trainer can browse to get detailed information about any Pokémon.</p><br/>
      <img src="https://github.com/KasperKnop/WEB2/blob/main/08%20Assignment%202/pokedex.png?raw=true" alt="link to picture of pokemon layout" />
      <h3>Requirements:</h3>
      <li>Pokémon information must be retrieved from <a href='https://pokeapi.co/'>pokeapi</a>, which you should already be familiar with.</li>
      <li>The Pokédex must display a list of Pokémon and support simple pagination (e.g. “next” and “previous” buttons to get the next/previous page of Pokémon), such that not all Pokémon are displayed at the same time.</li>
      <li>When a user clicks on a specific Pokémon, additional information about that Pokémon must be displayed. E.g. type(s), stats, abiltities, height and weight.</li>
      <li>The application must contain multiple pages (e.g. "pokedex" and "about") and utilize <a href='https://reactrouter.com/en/main'>React Router</a> to route between them.</li>
      <li>The application must be developed using <a href='https://vite.dev/'>Vite</a>.</li><br/>
      <p>Feel free to expand on the requirements. If you'd like to create something different from a Pokedex, you are welcome to find another Web API to work with. Just ensure that you meet all the requirements outlined above (pagination, a detailed view and multiple pages)!</p>
      <br/> <br/>
      <h3>Handin instructions:</h3>
      <li>Your App must be hosted on Github Pages. Follow <a href='https://vite.dev/guide/static-deploy#github-pages'>this guide</a> for instructions on how to deploy your React App.</li>
      <li>On itslearning, hand in the link to your App hosted on GitHub Pages.</li><br/>
      <p>The assignment can be developed alone or in groups of 2-4 and is evaluated on an approved/not approved basis. It must be approved in order to attend the course exam.</p>
    </div>
    </>
  )
}
  
export default PokedexOverview
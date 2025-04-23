function PokemonIndex( { pokemonIndex } ) { 

    let index = pokemonIndex;

    if( pokemonIndex == null) {
        index = '???';
    }

    return (
        <p>{"#" + index}</p>
    )
  }
  
  export default PokemonIndex
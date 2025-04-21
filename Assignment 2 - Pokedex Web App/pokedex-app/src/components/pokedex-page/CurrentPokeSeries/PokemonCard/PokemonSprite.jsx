function PokemonSprite({ pokemonSpriteUrl }) {
    if (!pokemonSpriteUrl) {
      return <p>Sprite Not Found.</p>;
    }
  
    return <img src={pokemonSpriteUrl} alt="Pokemon Sprite" />;
  }
  
export default PokemonSprite
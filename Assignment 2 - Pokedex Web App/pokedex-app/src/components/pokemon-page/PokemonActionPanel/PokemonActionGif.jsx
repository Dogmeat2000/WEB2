import '../../../assets/styles/pokemon-details-page.css'

function PokemonActionGif({ pokemonGifUrl, currentPokemonHeight }) {
    const minDisplayHeight = 60;
    const maxDisplayHeight = 484;

    if (!pokemonGifUrl) {
      return <p>Image Not Found.</p>;
    }

    return <img src={pokemonGifUrl} alt="Pokemon Gif" className="pokemonActionGifFormat" onLoad={(e) => {
        const img = e.currentTarget;
        let displayHeight;
        
        if(currentPokemonHeight <= 0.1){
            displayHeight = minDisplayHeight;
        } else if (currentPokemonHeight > 4){
            displayHeight = maxDisplayHeight;
        } else {
            const scaleRatio = currentPokemonHeight / 4;
            displayHeight = minDisplayHeight + (maxDisplayHeight - minDisplayHeight) * scaleRatio;
        }

        img.style.height = `${displayHeight}px`;
        img.style.width = 'auto'
        img.style.position = 'absolute';
        img.style.left = '50%';
        img.style.bottom = '7%';
        img.style.transform = 'translateX(-50%)';

    }}/>;
  }
  
export default PokemonActionGif
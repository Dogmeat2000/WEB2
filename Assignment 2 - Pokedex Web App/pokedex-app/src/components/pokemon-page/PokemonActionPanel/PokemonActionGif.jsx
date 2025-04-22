import '../../../assets/styles/pokemon-details-page.css'

function PokemonActionGif({ pokemonGifUrl, currentPokemonHeight, primaryPokemonType}) {
    const minDisplayHeight = 50;

    if (!pokemonGifUrl) {
      return <p>Image Not Found.</p>;
    }

    function determineGifPlacement(img, primaryPokemonType, pokemonHeight) {
        switch(primaryPokemonType){
            case "bug":
                if(pokemonHeight < 0.5) {
                    img.style.left = '45%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '55%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '54%';
                    img.style.bottom = '3%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;
            
            case "dark":
                if(pokemonHeight < 0.5) {
                    img.style.left = '56%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '60%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '50%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "dragon":
                if(pokemonHeight < 0.5) {
                    img.style.left = '60%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '40%';
                    img.style.bottom = '1%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '35%';
                    img.style.bottom = '0%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "electric":
                if(pokemonHeight < 0.5) {
                    img.style.left = '58%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '45%';
                    img.style.bottom = '9%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '50%';
                    img.style.bottom = '0%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "fairy":
                if(pokemonHeight < 0.5) {
                    img.style.left = '60%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '44%';
                    img.style.bottom = '3%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '58%';
                    img.style.bottom = '12%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "fighting":
                if(pokemonHeight < 0.5) {
                    // TODO:
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '12%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '53%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "fire":
                if(pokemonHeight < 0.5) {
                    img.style.left = '47%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '55%';
                    img.style.bottom = '5%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '75%';
                    img.style.bottom = '12%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "flying":
                if(pokemonHeight < 0.5) {
                    img.style.left = '50%';
                    img.style.bottom = '32%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '20%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '60%';
                    img.style.bottom = '18%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "ghost":
                if(pokemonHeight < 0.5) {
                    img.style.left = '50%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '44%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;   

            case "grass":
                if(pokemonHeight < 0.5) {
                    img.style.left = '60%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '25%';
                    img.style.bottom = '5%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '45%';
                    img.style.bottom = '3%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "ground":
                if(pokemonHeight < 0.5) {
                    img.style.left = '68%';
                    img.style.bottom = '16%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '42%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '64%';
                    img.style.bottom = '8%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "ice":
                if(pokemonHeight < 0.5) {
                    img.style.left = '72%';
                    img.style.bottom = '14%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '44%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '45%';
                    img.style.bottom = '3%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "normal":
                if(pokemonHeight < 0.5) {
                    img.style.left = '42%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '70%';
                    img.style.bottom = '9%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '48%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "poison":
                if(pokemonHeight < 0.5) {
                    img.style.left = '63%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '48%';
                    img.style.bottom = '5%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '46%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "psychic":
                if(pokemonHeight < 0.5) {
                    img.style.left = '48%';
                    img.style.bottom = '8%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '58%';
                    img.style.bottom = '15%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '50%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "rock":
                if(pokemonHeight < 0.5) {
                    img.style.left = '62%';
                    img.style.bottom = '22%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '56%';
                    img.style.bottom = '5%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '45%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "steel":
                if(pokemonHeight < 0.5) {
                    img.style.left = '33%';
                    img.style.bottom = '8%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '2%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '45%';
                    img.style.bottom = '4%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "stellar":
                if(pokemonHeight < 0.5) {
                    img.style.left = '50%';
                    img.style.bottom = '10%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '10%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '50%';
                    img.style.bottom = '10%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            case "water":
                if(pokemonHeight < 0.5) {
                    img.style.left = '38%';
                    img.style.bottom = '19%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '69%';
                    img.style.bottom = '8%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '58%';
                    img.style.bottom = '6%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;

            
            default:
                if(pokemonHeight < 0.5) {
                    img.style.left = '50%';
                    img.style.bottom = '7%';
                    img.style.transform = 'translateX(-50%)';
                } else if (pokemonHeight >= 0.5 && pokemonHeight < 2.0) {
                    img.style.left = '50%';
                    img.style.bottom = '7%';
                    img.style.transform = 'translateX(-50%)';
                } else {
                    img.style.left = '50%';
                    img.style.bottom = '7%';
                    img.style.transform = 'translateX(-50%)';
                }
                break;
        }

        return null;
    }

    return <img src={pokemonGifUrl} alt="Pokemon Gif" className="pokemonActionGifFormat" onLoad={(e) => {
        const img = e.currentTarget;
        let displayHeight;
        
        if(currentPokemonHeight < 0.1){
            displayHeight = minDisplayHeight;
        } else if (currentPokemonHeight >= 0.1 && currentPokemonHeight < 0.5){
            displayHeight = minDisplayHeight + (((currentPokemonHeight - 0.1)/ (0.5-0.1)) * (200 - minDisplayHeight));
        } else if (currentPokemonHeight >= 0.5 && currentPokemonHeight < 2) {
            displayHeight = (minDisplayHeight + 80) + (((currentPokemonHeight - 0.5) / ( 2.0 - 0.5)) * (420 - (minDisplayHeight+80)));
        } else {
            const logHeight = currentPokemonHeight - 2.0 + 1;
            const scale = Math.log10(75.0);
            const growth = Math.log10(logHeight) / scale;
            displayHeight = (minDisplayHeight + 120) + (growth * ((480 - (minDisplayHeight+120))));
        }

        img.style.height = `${displayHeight}px`;
        img.style.width = 'auto'
        img.style.position = 'absolute';
        determineGifPlacement(img, primaryPokemonType, currentPokemonHeight);
    }}/>;
  }
  
export default PokemonActionGif
import '../../../../assets/styles/pokemon-overview-card.css'

function PokemonType( { type } ) { 

    let classname = "pokeTypeElement ";

    switch (type) {
        case "normal":
            classname = classname + "pokeTypeNormal";
            break;

        case "fighting":
            classname = classname + "pokeTypeFighting";
            break;
    
        case "flying":
            classname = classname + "pokeTypeFlying";
            break;

        case "poison":
            classname = classname + "pokeTypePoison";
            break;

        case "ground":
            classname = classname + "pokeTypeGround";
            break;

        case "rock":
            classname = classname + "pokeTypeRock";
            break;
    
        case "bug":
            classname = classname + "pokeTypeBug";
            break;

        case "ghost":
            classname = classname + "pokeTypeGhost";
            break;

        case "steel":
            classname = classname + "pokeTypeSteel";
            break;

        case "stellar":
            classname = classname + "pokeTypeStellar";
            break;
    
        case "fire":
            classname = classname + "pokeTypeFire";
            break;

        case "water":
            classname = classname + "pokeTypeWater";
            break;

        case "grass":
            classname = classname + "pokeTypeGrass";
            break;

        case "electric":
            classname = classname + "pokeTypeElectric";
            break;
    
        case "psychic":
            classname = classname + "pokeTypePsychic";
            break;

        case "ice":
            classname = classname + "pokeTypeIce";
            break;

        case "dragon":
            classname = classname + "pokeTypeDragon";
            break;

        case "dark":
            classname = classname + "pokeTypeDark";
            break;
    
        case "fairy":
            classname = classname + "pokeTypeFairy";
            break;

        default:
            classname = classname + "pokeTypeUnknown";
            break;
    }

    return (
        <p className={classname}>{type}</p>
    )
  }
  
  export default PokemonType
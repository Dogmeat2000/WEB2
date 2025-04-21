import '../../../../assets/styles/pokemon-details-page.css'

function PokemonStatRow( { name, value, maxValue = 255 } ) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="pokeStatTableRow">
      <span className="pokeStatTableName">{name}</span>
      <div className="pokeStatBarWrapper">
        <div className="pokeBarStatFiller" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="pokeBarValueDisplay">
        {value}
      </div>
    </div>
  );
}

export default PokemonStatRow;
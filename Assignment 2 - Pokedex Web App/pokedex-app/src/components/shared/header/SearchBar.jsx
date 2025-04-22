import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/header.css'

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;

    let input = query.trim().toLowerCase();

    // Try parsing as number, to see if it's a pokemon id:
    let id = parseInt(input);
    if (!isNaN(id)) {
      navigate(`/pokedex/${id}`);
      return;
    }

    try {
      // If not a number, I fetch by pokemon name:
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      if (!response.ok) throw new Error('Not found');
      const data = await response.json();
      navigate(`/pokedex/${data.id}`);
    } catch (err) {
      navigate(`/exception/${err}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="Search... (name or id)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="searchInput"
      />
      <button onClick={handleSearch} className="searchButton">Go</button>
    </div>
  );
}
  
export default SearchBar
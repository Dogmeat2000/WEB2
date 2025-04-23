import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PokemonSprite from '../../../../../components/pokedex-page/CurrentPokeSeries/PokemonCard/PokemonSprite.jsx';

describe('PokemonSprite', () => {
  it('renders the image when pokemonSpriteUrl is provided', () => {
    const testUrl = 'https://example.com/sprite.png';

    render(<PokemonSprite pokemonSpriteUrl={testUrl} />);

    const imgElement = screen.getByAltText('Pokemon Sprite');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', testUrl);
  });

  it('renders fallback message when pokemonSpriteUrl is missing', () => {
    render(<PokemonSprite />);

    const fallbackText = screen.getByText('Sprite Not Found.');
    expect(fallbackText).toBeInTheDocument();
  });
});
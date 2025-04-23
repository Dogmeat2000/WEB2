import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PokemonIndex from '../../../../../components/pokedex-page/CurrentPokeSeries/PokemonCard/PokemonIndex.jsx';

describe('PokemonIndex', () => {
  it('renders the index of a pokemon when index number is provided', () => {
    // Arrange:
    const testIndex = 1;

    // Act:
    render(<PokemonIndex pokemonIndex={testIndex} />);

    // Assert:
    const indexElement = screen.getByText("#" + testIndex);
    expect(indexElement).toBeInTheDocument();
  });


  it('renders fallback index, when pokemonIndex prop is missing', () => {
    render(<PokemonIndex />);

    const fallbackIndex = screen.getByText('#???');
    expect(fallbackIndex).toBeInTheDocument();
  });
});
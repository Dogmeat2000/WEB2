/// <reference types="vitest" />
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';

describe('App', () => {


  it('renders the heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /pokedex/i });
    expect(heading).toBeInTheDocument();
  });



  it('renders the search bar', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });



  it('renders the footer disclaimer', () => {
    render(<App />);
    const disclaimer = screen.getByText(/created with/i);
    expect(disclaimer).toBeInTheDocument();
  });



  it('renders Pokémon cards', async () => {
    render(<App />);
    
    // Wait for cards to load
    const cards = await screen.findAllByTestId('pokeCard', { timeout: 5000 });
    expect(cards.length).toBeGreaterThan(0);

    // Optionally: confirm they have the correct class
    cards.forEach(card => {
      expect(card).toHaveClass('pokeCard');
    });
  });



  it('updates cards when clicking next', async () => {
    render(<App />);
    
    // Wait for initial load
    const cardsBefore = await screen.findAllByTestId('pokeCard');
    const firstBefore = cardsBefore[0].textContent;

    const nextButtons = await screen.findAllByRole('button', { name: /next/i });
    const nextButton = nextButtons[0];
    await userEvent.click(nextButton);

    // Wait for cards to update
    await waitFor(async () => {
      const cardsAfter = await screen.findAllByTestId('pokeCard');
      const firstAfter = cardsAfter[0].textContent;
      expect(firstAfter).not.toBe(firstBefore);
    }, { timeout: 3000 });
  });
});

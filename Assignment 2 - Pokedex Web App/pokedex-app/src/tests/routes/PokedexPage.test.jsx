import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, afterEach, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom'
import PokedexPage from '../../routes/PokedexPage.jsx'


const originalFetch = globalThis.fetch;
// Mock the global fetch function, to properly isolate unit test
globalThis.fetch = vi.fn()

describe('PokedexPage', () => {
    afterEach(() => {
      vi.resetAllMocks()
    });
  
    
    it('fetches and sets the correct Pokémon count from the API (using mocking)', async () => {
        // Arrange: Prepare mock(s)
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
            count: 1302
            }),
        });
  

        // Act: Render the page
        render(<MemoryRouter>
            <PokedexPage />
        </MemoryRouter>);
    

        // Assert: Check if things are properly loading
        expect(screen.getByText(/Loading Pokémon data.../i)).toBeInTheDocument();
    
        // Wait for final UI (after async logic is done)
        await waitFor(() =>
            expect(screen.queryByText(/Loading Pokémon data.../i)).not.toBeInTheDocument()
        );
    
        // Check if the Next button appears in the final render (which it should)
        const nextButtons = screen.getAllByText(/Next/i);
        expect(nextButtons.length).toBeGreaterThan(0);
    });
  

    it('shows an error message when the fetch fails', async () => {
        // Arrange: Prepare the mock
        fetch.mockRejectedValueOnce(new Error('Network error'));
  
        // Act: Render the page
        render(<MemoryRouter>
            <PokedexPage />
        </MemoryRouter>);
    
        // Assert: Check if things are properly loading
        expect(screen.getByText(/Loading Pokémon data.../i)).toBeInTheDocument();
    
        await waitFor(() =>
            expect(screen.queryByText(/Loading Pokémon data.../i)).not.toBeInTheDocument()
        );
    
        expect(screen.getByText(/Failed to fetch Pokémon count/i)).toBeInTheDocument();
        expect(screen.getByText(/Network error/i)).toBeInTheDocument();
    });


    test('fetches the real Pokemon count from the live API', async () => {
        globalThis.fetch = originalFetch;

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');
        const data = await response.json();
        expect(data.count).toBeGreaterThan(0);
    });

});
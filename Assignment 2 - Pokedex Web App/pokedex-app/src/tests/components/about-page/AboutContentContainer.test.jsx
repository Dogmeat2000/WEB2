import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutContentContainer from '../../../components/about-page/AboutContentContainer.jsx';

describe('App', () => {

  it('renders the contents of the AboutContentContainer (About Page)', () => {
    render(<AboutContentContainer />);
    const disclaimer = screen.getByText(/In this assignment, you must create a/i);
    expect(disclaimer).toBeInTheDocument();
  });

});

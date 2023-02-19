import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Searchbar from '../SearchBar';

describe('Searchbar', () => {
  test('Searchbar renders input element', () => {
    render(<Searchbar />);
    const inupuElement = screen.getByPlaceholderText('Rechercher un joueur');
    expect(inupuElement).toBeInTheDocument();
  });

  test('Searchbar contains input field', () => {
    const mockSetSearchPlayer = vi.fn();

    const mockData = [
      {
        id: 52,
        firstname: 'Novak',
        lastname: 'Djokovic',
        shortname: 'N.DJO',
        sex: 'M'
      }
    ];

    render(<Searchbar data={mockData} setSearchPlayer={mockSetSearchPlayer} />);

    const inputField = screen.getByLabelText('search-input');

    fireEvent.change(inputField, { target: { value: 'Novak' } });

    expect(inputField.value).toBe('Novak');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ListCard from '../ListCard';

describe('ListCard', () => {
  test('should display the correct number of cards', () => {
    const mockData = Array.from(Array(5), (_, index) => ({
      id: index,
      firstname: 'Novak',
      lastname: 'Djokovic',
      shortname: 'N.DJO',
      sex: 'M',
      country: {
        picture: 'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
        code: 'SRB'
      },
      picture: 'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
      data: {
        rank: 2,
        points: 2542
      }
    }));

    render(<ListCard data={mockData} searchPlayer={mockData} />);
    expect(screen.getAllByRole('card').length).toBe(5);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

// Mock JSON imports
jest.mock('../components/json/books.json', () => [
  { docId: 'b1', title: 'Book 1' },
  { docId: 'b2', title: 'Book 2' },
  { docId: 'b3', title: 'Book 3' },
]);
jest.mock('../components/json/movies.json', () => [
  { docId: 'm1', title: 'Movie 1' },
  { docId: 'm2', title: 'Movie 2' },
  { docId: 'm3', title: 'Movie 3' },
]);
jest.mock('../components/json/series.json', () => [
  { docId: 's1', title: 'Series 1' },
  { docId: 's2', title: 'Series 2' },
  { docId: 's3', title: 'Series 3' },
]);
jest.mock('../components/json/cartoons.json', () => [
  { docId: 'c1', title: 'Cartoon 1' },
  { docId: 'c2', title: 'Cartoon 2' },
  { docId: 'c3', title: 'Cartoon 3' },
]);

// Mock MediaCard
jest.mock('../components/MediaCard/MediaCard', () => (props) => (
    <div data-testid="media-card">{props.title}</div>
));

describe('Home component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders intro section', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to myRecommendations/i)).toBeInTheDocument();
    expect(
        screen.getByText(/This page was created to share books, movies, series and cartoons/i)
    ).toBeInTheDocument();
  });

  test('renders random picks section with MediaCards', () => {
    render(<Home />);
    const cards = screen.getAllByTestId('media-card');
    expect(cards.length).toBeGreaterThan(0); // ensures items rendered
  });

});
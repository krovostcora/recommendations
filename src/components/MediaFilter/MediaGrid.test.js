import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaGrid } from './MediaGrid';

// Mock MediaCard to simplify output
jest.mock('../MediaCard/MediaCard', () => (props) => (
    <div data-testid="media-card">{props.title}</div>
));

const mediaItems = [
  { id: 1, title: 'Movie A', year: 2000, rating: 3, genres: ['Action'], country: 'USA' },
  { id: 2, title: 'Movie B', year: 2010, rating: 5, genres: ['Drama'], country: 'UK' },
  { id: 3, title: 'Movie C', year: 2005, rating: 2, genres: ['Action', 'Drama'], country: 'USA' },
];

describe('MediaGrid', () => {
  it('renders header and stats', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    expect(screen.getByText('Movies Recommendations')).toBeInTheDocument();
    expect(screen.getByText(/Showing 3 of 3 items/)).toBeInTheDocument();
  });

  it('filters by genre', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    fireEvent.click(screen.getByText('Action')); // toggle Action genre
    expect(screen.getAllByTestId('media-card')).toHaveLength(2);
  });

  it('filters by country', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    fireEvent.click(screen.getByText('Countries'));
    fireEvent.click(screen.getByText('UK')); // toggle UK
    expect(screen.getAllByTestId('media-card')).toHaveLength(1);
    expect(screen.getByText('Movie B')).toBeInTheDocument();
  });

  it('filters by rating', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    fireEvent.click(screen.getByText('Rating'));
    fireEvent.click(screen.getAllByText('★')[3]); // set rating >= 4
    expect(screen.getAllByTestId('media-card')).toHaveLength(1);
    expect(screen.getByText('Movie B')).toBeInTheDocument();
  });

  it('sorts by year descending', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    fireEvent.click(screen.getByText('Sort'));
    fireEvent.click(screen.getByLabelText(/Year \(Newest first\)/));
    const cards = screen.getAllByTestId('media-card');
    expect(cards[0]).toHaveTextContent('Movie B'); // 2010
    expect(cards[1]).toHaveTextContent('Movie C'); // 2005
    expect(cards[2]).toHaveTextContent('Movie A'); // 2000
  });

  it('shows no results and allows reset', () => {
    render(<MediaGrid mediaItems={mediaItems} mediaType="Movies" />);
    // Apply filters that match nothing
    fireEvent.click(screen.getByText('Action'));
    fireEvent.click(screen.getByText('Countries'));
    fireEvent.click(screen.getByText('UK'));

    expect(screen.getByText('No items match your filters')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset all filters'));
    expect(screen.getAllByTestId('media-card')).toHaveLength(3);
  });
});
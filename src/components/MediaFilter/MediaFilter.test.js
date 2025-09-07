import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaFilter from './MediaFilter';

const baseProps = {
  allGenres: ['Action', 'Drama'],
  allCountries: ['USA', 'UK'],
  selectedGenres: [],
  selectedCountries: [],
  sortBy: 'default',
  ratingFilter: 0,
  onGenreToggle: jest.fn(),
  onCountryToggle: jest.fn(),
  onSortChange: jest.fn(),
  onRatingFilterChange: jest.fn(),
  onClearFilters: jest.fn(),
};

describe('MediaFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders genres by default and toggles genre', () => {
    render(<MediaFilter {...baseProps} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Action'));
    expect(baseProps.onGenreToggle).toHaveBeenCalledWith('Action');
  });

  it('switches to countries tab and toggles country', () => {
    render(<MediaFilter {...baseProps} />);
    fireEvent.click(screen.getByText('Countries'));
    expect(screen.getByText('USA')).toBeInTheDocument();
    fireEvent.click(screen.getByText('USA'));
    expect(baseProps.onCountryToggle).toHaveBeenCalledWith('USA');
  });

  it('switches to sort tab and selects sort option', () => {
    render(<MediaFilter {...baseProps} />);
    fireEvent.click(screen.getByText('Sort'));
    const yearAsc = screen.getByLabelText(/Year \(Oldest first\)/);
    fireEvent.click(yearAsc);
    expect(baseProps.onSortChange).toHaveBeenCalledWith('year-asc');
  });

  it('switches to rating tab and applies rating filter', () => {
    render(<MediaFilter {...baseProps} />);
    fireEvent.click(screen.getByText('Rating'));
    const star3 = screen.getAllByText('★')[2];
    fireEvent.click(star3);
    expect(baseProps.onRatingFilterChange).toHaveBeenCalledWith(3);
  });

  it('calls reset rating', () => {
    render(<MediaFilter {...baseProps} />);
    fireEvent.click(screen.getByText('Rating'));
    fireEvent.click(screen.getByText('Reset Rating'));
    expect(baseProps.onRatingFilterChange).toHaveBeenCalledWith(0);
  });

  it('shows clear filters button when filters are active', () => {
    render(
        <MediaFilter
            {...baseProps}
            selectedGenres={['Drama']}
            ratingFilter={4}
            sortBy="year-asc"
        />
    );
    expect(screen.getByText('Clear All Filters')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Clear All Filters'));
    expect(baseProps.onClearFilters).toHaveBeenCalled();
  });
});
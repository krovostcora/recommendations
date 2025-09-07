// src/hooks/StarRating.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';
import '@testing-library/jest-dom';


describe('StarRating', () => {
  it('renders 5 empty stars by default', () => {
    render(<StarRating />);
    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getByText('(0.0)')).toBeInTheDocument();
  });

  it('renders correct number of full stars', () => {
    render(<StarRating rating={3} />);
    expect(screen.getAllByText('★')).toHaveLength(3);
    expect(screen.getAllByText('☆')).toHaveLength(2);
    expect(screen.getByText('(3.0)')).toBeInTheDocument();
  });

  it('renders half star when rating is 3.5', () => {
    render(<StarRating rating={3.5} />);
    expect(screen.getAllByText('★')).toHaveLength(3);
    expect(screen.getByText('½')).toBeInTheDocument();
    expect(screen.getAllByText('☆')).toHaveLength(1);
    expect(screen.getByText('(3.5)')).toBeInTheDocument();
  });
});
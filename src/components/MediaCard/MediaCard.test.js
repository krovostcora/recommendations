// src/components/MediaCard/MediaCard.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaCard from './MediaCard';

// Mock context
jest.mock('../../context/AuthContext', () => ({
  useAuth: jest.fn()
}));

// Mock Firebase
const mockGetDoc = jest.fn();
const mockSetDoc = jest.fn();
const mockDeleteDoc = jest.fn();

jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: (...args) => mockGetDoc(...args),
  setDoc: (...args) => mockSetDoc(...args),
  deleteDoc: (...args) => mockDeleteDoc(...args)
}));

jest.mock('../../firebase', () => ({
  db: {}
}));

// Mock StarRating
jest.mock('../../hooks/StarRating', () => () => <div data-testid="star-rating" />);

const { useAuth } = require('../../context/AuthContext');

const baseProps = {
  id: '123',
  title: 'Test Movie',
  year: 2022,
  rating: 4,
  poster: '/poster.jpg',
  cover: '/cover.jpg',
  type: 'movie',
  country: 'USA',
  author: 'Anna Kutova',
  genres: ['Drama', 'Action']
};

describe('MediaCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title, year, author and genres', () => {
    useAuth.mockReturnValue({ user: null });

    render(<MediaCard {...baseProps} />);

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();
    expect(screen.getByText(/Anna Kutova/)).toBeInTheDocument();
    expect(screen.getByText(/Drama, Action/)).toBeInTheDocument();
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  });

  it('shows placeholder image if poster fails to load', () => {
    useAuth.mockReturnValue({ user: null });

    render(<MediaCard {...baseProps} />);

    const img = screen.getByAltText('Test Movie');
    fireEvent.error(img);

    expect(img).toHaveAttribute('src', '/placeholder-image.jpg');
  });

  it('shows "not liked" icon when not favorite', () => {
    useAuth.mockReturnValue({ user: { uid: 'user1' } });

    render(<MediaCard {...baseProps} isFavorite={false} />);

    expect(screen.getByAltText('Not liked')).toBeInTheDocument();
  });

  it('shows "liked" icon when favorite', () => {
    useAuth.mockReturnValue({ user: { uid: 'user1' } });

    render(<MediaCard {...baseProps} isFavorite={true} />);

    expect(screen.getByAltText('Liked')).toBeInTheDocument();
  });

  it('alerts when user is not logged in and tries to favorite', () => {
    useAuth.mockReturnValue({ user: null });
    window.alert = jest.fn();

    render(<MediaCard {...baseProps} />);

    fireEvent.click(screen.getByRole('button', { name: /add to favorites/i }));

    expect(window.alert).toHaveBeenCalledWith('Please login to save favorites');
  });

  it('adds to favorites when clicked and not favorite', async () => {
    useAuth.mockReturnValue({ user: { uid: 'user1' } });
    mockSetDoc.mockResolvedValue();

    const onFavoriteToggle = jest.fn();

    render(<MediaCard {...baseProps} isFavorite={false} onFavoriteToggle={onFavoriteToggle} />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(mockSetDoc).toHaveBeenCalled());
    await waitFor(() => expect(onFavoriteToggle).toHaveBeenCalledWith(true, expect.any(String)));
  });

  it('removes from favorites when clicked and already favorite', async () => {
    useAuth.mockReturnValue({ user: { uid: 'user1' } });
    mockDeleteDoc.mockResolvedValue();

    const onFavoriteToggle = jest.fn();

    render(<MediaCard {...baseProps} isFavorite={true} onFavoriteToggle={onFavoriteToggle} />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(mockDeleteDoc).toHaveBeenCalled());
    await waitFor(() => expect(onFavoriteToggle).toHaveBeenCalledWith(false, expect.any(String)));
  });
});
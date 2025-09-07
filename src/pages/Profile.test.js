import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';

// Mock firebase directly inside jest.mock
jest.mock('../firebase', () => {
  const mockGet = jest.fn();
  return {
    db: {
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          collection: jest.fn(() => ({
            get: mockGet
          }))
        }))
      })),
      __mockGet: mockGet // Expose for tests
    }
  };
});

// Mock AuthContext
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn()
}));

describe('Profile component', () => {
  const { useAuth } = require('../context/AuthContext');
  const { db } = require('../firebase');

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('shows message when no user', () => {
    useAuth.mockReturnValue({ user: null });
    render(<Profile />);
    expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
  });

  test('renders message if user has no favorites', async () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });

    db.__mockGet.mockResolvedValue({ docs: [] });

    render(<Profile />);
    const message = await screen.findByText(/no favorites yet/i);
    expect(message).toBeInTheDocument();
  });

  test('renders user favorites', async () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });

    const mockFavorites = [
      { id: '1', name: 'Book One', image: '/book1.png' },
      { id: '2', name: 'Movie One', image: '/movie1.png' }
    ];

    db.__mockGet.mockResolvedValue({
      docs: mockFavorites.map(f => ({ data: () => f }))
    });

    render(<Profile />);

    for (let fav of mockFavorites) {
      const itemName = await screen.findByText(fav.name);
      expect(itemName).toBeInTheDocument();
      const itemImg = screen.getByAltText(fav.name);
      expect(itemImg).toHaveAttribute('src', fav.image);
    }
  });

  test('toggles like and updates localStorage', async () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });

    const mockFavorites = [{ id: '1', name: 'Book One', image: '/book1.png' }];

    db.__mockGet.mockResolvedValue({
      docs: mockFavorites.map(f => ({ data: () => f }))
    });

    render(<Profile />);

    const likeButton = await screen.findByRole('button');
    fireEvent.click(likeButton);

    const storedLikes = JSON.parse(localStorage.getItem('likes') || '{}');
    expect(storedLikes['1']).toBe(true);
  });
});

import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import FavoritesPage from './FavoritesPage';

// Mocks
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../hooks/useFavorites', () => ({
  useFavorites: jest.fn(),
}));

jest.mock('../components/MediaCard/MediaCard', () => (props) => (
    <div data-testid="media-card">
      {props.title}
      <button onClick={() => props.onFavoriteToggle(false, props.docId)}>Remove</button>
    </div>
));

describe('FavoritesPage', () => {
  const { useAuth } = require('../context/AuthContext');
  const { useFavorites } = require('../hooks/useFavorites');

  test('renders login prompt if user is not authenticated', () => {
    useAuth.mockReturnValue({ user: null });
    useFavorites.mockReturnValue({ favorites: {}, loading: false, removeFavorite: jest.fn() });

    render(<FavoritesPage />);
    expect(screen.getByText(/please log in/i)).toBeInTheDocument();
  });

  test('renders loading state', () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });
    useFavorites.mockReturnValue({ favorites: {}, loading: true, removeFavorite: jest.fn() });

    render(<FavoritesPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders message if no favorites', () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });
    useFavorites.mockReturnValue({ favorites: {}, loading: false, removeFavorite: jest.fn() });

    render(<FavoritesPage />);
    expect(screen.getByText(/no favorites saved yet/i)).toBeInTheDocument();
  });

  test('renders categorized favorites and allows removing', () => {
    useAuth.mockReturnValue({ user: { uid: '123' } });
    const removeFavoriteMock = jest.fn();

    const favorites = {
      f1: { docId: '1', title: 'Book One', type: 'book' },
      f2: { docId: '2', title: 'Movie One', type: 'movie' },
      f3: { docId: '3', title: 'Book Two', type: 'book' },
    };

    useFavorites.mockReturnValue({
      favorites,
      loading: false,
      removeFavorite: removeFavoriteMock,
    });

    render(<FavoritesPage />);

    // Check category titles
    expect(screen.getByText(/Books \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Movies \(1\)/i)).toBeInTheDocument();

    // Check MediaCard
    const cards = screen.getAllByTestId('media-card');
    expect(cards.length).toBe(3);
    expect(screen.getByText('Book One')).toBeInTheDocument();

  });
});

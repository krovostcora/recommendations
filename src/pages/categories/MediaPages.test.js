import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Books from './Books';
import Cartoons from './Cartoons';
import Movies from './Movies';
import Series from './Series';
import books from '../../components/json/books.json';
import cartoons from '../../components/json/cartoons.json';
import movies from '../../components/json/movies.json';
import series from '../../components/json/series.json';

// Mock the AuthContext so MediaCard doesn't throw
jest.mock('../../context/AuthContext', () => ({
  useAuth: () => ({ user: { uid: 'test-uid' } })
}));

describe('Media pages', () => {
  test('Books page renders MediaGrid with books', () => {
    render(<Books />);
    const firstBook = books[0];
    expect(screen.getByText(firstBook.title || firstBook.name)).toBeInTheDocument();
  });

  test('Cartoons page renders MediaGrid with cartoons', () => {
    render(<Cartoons />);
    const firstCartoon = cartoons[0];
    expect(screen.getByText(firstCartoon.title || firstCartoon.name)).toBeInTheDocument();
  });

  test('Movies page renders MediaGrid with movies', () => {
    render(<Movies />);
    const firstMovie = movies[0];
    expect(screen.getByText(firstMovie.title || firstMovie.name)).toBeInTheDocument();
  });

  test('Series page renders MediaGrid with series', () => {
    render(<Series />);
    const firstSeries = series[0];
    expect(screen.getByText(firstSeries.title || firstSeries.name)).toBeInTheDocument();
  });
});

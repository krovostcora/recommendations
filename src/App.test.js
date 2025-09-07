import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock pages so tests focus on routing
jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/categories/Books', () => () => <div>Books Page</div>);
jest.mock('./pages/categories/Movies', () => () => <div>Movies Page</div>);
jest.mock('./pages/categories/Series', () => () => <div>Series Page</div>);
jest.mock('./pages/categories/Cartoons', () => () => <div>Cartoons Page</div>);
jest.mock('./pages/FavoritesPage', () => () => <div>Favorites Page</div>);
jest.mock('./components/navbar/Navbar', () => () => <nav>Navbar</nav>);

describe('App component', () => {
  test('renders Navbar and Home page by default', () => {
    render(<App />);
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});

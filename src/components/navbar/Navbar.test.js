import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null]),
}));

jest.mock('../Login/LoginButton', () => () => <div>LoginButton</div>);
jest.mock('./ThemeToggle', () => () => <div>ThemeToggle</div>);

describe('Navbar', () => {
  test('renders logo and main links', () => {
    render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
    );

    const logo = screen.getByAltText(/home/i);
    expect(logo).toBeInTheDocument();

    expect(screen.getByText(/books/i)).toBeInTheDocument();
    expect(screen.getByText(/movies/i)).toBeInTheDocument();
    expect(screen.getByText(/series/i)).toBeInTheDocument();
    expect(screen.getByText(/cartoons/i)).toBeInTheDocument();

    expect(screen.getByText(/LoginButton/i)).toBeInTheDocument();
    expect(screen.getByText(/ThemeToggle/i)).toBeInTheDocument();
  });

  test('secondary menu toggles class when clicked', () => {
    render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
    );

    const secondaryMenu = screen.getByLabelText('Secondary');

    expect(secondaryMenu.className).not.toContain('active');

    fireEvent.click(secondaryMenu);
    expect(secondaryMenu.className).not.toContain('active');
  });
});

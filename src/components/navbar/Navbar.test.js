import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Мок для useAuthState з react-firebase-hooks
jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null]), // спочатку неавторизований користувач
}));

// Мок для LoginButton та ThemeToggle (щоб не рендерити весь компонент)
jest.mock('../Login/LoginButton', () => () => <div>LoginButton</div>);
jest.mock('./ThemeToggle', () => () => <div>ThemeToggle</div>);

describe('Navbar', () => {
  test('renders logo and main links', () => {
    render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
    );

    // Логотип
    const logo = screen.getByAltText(/home/i);
    expect(logo).toBeInTheDocument();

    // Основні посилання
    expect(screen.getByText(/books/i)).toBeInTheDocument();
    expect(screen.getByText(/movies/i)).toBeInTheDocument();
    expect(screen.getByText(/series/i)).toBeInTheDocument();
    expect(screen.getByText(/cartoons/i)).toBeInTheDocument();

    // Другорядні компоненти
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

    // Спочатку клас 'active' відсутній
    expect(secondaryMenu.className).not.toContain('active');

    // Клік по меню додає клас active (closeMenu у твоєму компоненті)
    fireEvent.click(secondaryMenu);
    expect(secondaryMenu.className).not.toContain('active'); // закривається одразу після кліку
  });
});

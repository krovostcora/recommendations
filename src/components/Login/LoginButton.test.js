// src/components/Login/LoginButton.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginButton from './LoginButton';

// Mock react-icons
jest.mock('react-icons/fi', () => ({
  FiLogIn: () => <span data-testid="login-icon" />,
  FiLogOut: () => <span data-testid="logout-icon" />
}));

// Mock useAuth context
jest.mock('../../context/AuthContext', () => ({
  useAuth: jest.fn()
}));

// Mock firebase/auth
const mockSignInWithPopup = jest.fn();
const mockSignOut = jest.fn();

jest.mock('firebase/auth', () => ({
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: (...args) => mockSignInWithPopup(...args),
  signOut: (...args) => mockSignOut(...args),
}));

// Mock firebase config
jest.mock('../../firebase', () => ({
  auth: {}
}));

const { useAuth } = require('../../context/AuthContext');
const mockSetUser = jest.fn();

describe('LoginButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Login when user is null (desktop)', () => {
    useAuth.mockReturnValue({ user: null, setUser: mockSetUser });
    window.innerWidth = 1024;
    render(<LoginButton />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders login icon when user is null (mobile)', () => {
    useAuth.mockReturnValue({ user: null, setUser: mockSetUser });
    window.innerWidth = 400;
    render(<LoginButton />);
    expect(screen.getByTestId('login-icon')).toBeInTheDocument();
  });

  it('renders Logout with name when user is present (desktop)', () => {
    useAuth.mockReturnValue({
      user: { displayName: 'Anna Kutova' },
      setUser: mockSetUser
    });
    window.innerWidth = 1024;
    render(<LoginButton />);
    expect(screen.getByText('Logout (Anna)')).toBeInTheDocument();
  });

  it('renders logout icon when user is present (mobile)', () => {
    useAuth.mockReturnValue({
      user: { displayName: 'Anna Kutova' },
      setUser: mockSetUser
    });
    window.innerWidth = 400;
    render(<LoginButton />);
    expect(screen.getByTestId('logout-icon')).toBeInTheDocument();
  });

  it('calls login on click when no user', async () => {
    useAuth.mockReturnValue({ user: null, setUser: mockSetUser });
    mockSignInWithPopup.mockResolvedValue({ user: { displayName: 'Anna' } });

    render(<LoginButton />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(mockSignInWithPopup).toHaveBeenCalled());
    await waitFor(() => expect(mockSetUser).toHaveBeenCalledWith({ displayName: 'Anna' }));
  });

  it('calls logout on click when user is present', async () => {
    useAuth.mockReturnValue({
      user: { displayName: 'Anna Kutova' },
      setUser: mockSetUser
    });
    mockSignOut.mockResolvedValue();

    render(<LoginButton />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(mockSignOut).toHaveBeenCalled());
    await waitFor(() => expect(mockSetUser).toHaveBeenCalledWith(null));
  });
});
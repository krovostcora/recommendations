import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth, AuthProvider } from './AuthContext';
import { auth } from '../firebase';

// Mock firebase auth
jest.mock('../firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
  },
}));

const TestComponent = () => {
  const { user, loading, error } = useAuth();
  return (
      <div>
        <div>Loading: {loading ? 'true' : 'false'}</div>
        <div>User: {user ? user.uid : 'null'}</div>
        <div>Error: {error ? error : 'null'}</div>
      </div>
  );
};

describe('AuthProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders children when user is authenticated', async () => {
    const fakeUser = { uid: '123' };
    auth.onAuthStateChanged.mockImplementation((callback) => {
      callback(fakeUser);
      return jest.fn(); // unsubscribe
    });

    render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
    );

    // Use findByText instead of waitFor + getByText
    expect(await screen.findByText('Loading: false')).toBeInTheDocument();
    expect(await screen.findByText('User: 123')).toBeInTheDocument();
    expect(await screen.findByText('Error: null')).toBeInTheDocument();
  });
});
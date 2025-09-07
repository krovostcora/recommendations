import { renderHook, act } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { useFavorites } from './useFavorites';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';

// Mock firebase and Auth
jest.mock('../firebase', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  setDoc: jest.fn(),
  deleteDoc: jest.fn(),
  getDocs: jest.fn(),
  collection: jest.fn(),
}));
jest.mock('../context/AuthContext', () => ({ useAuth: jest.fn() }));

describe('useFavorites', () => {
  const fakeUser = { uid: 'user123' };
  const favItem = { docId: 'item1', title: 'Favorite 1' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('loads favorites and toggles/removes them', async () => {
    useAuth.mockReturnValue({ user: fakeUser });

    getDocs.mockResolvedValue({
      forEach: (cb) => cb({ data: () => favItem })
    });
    doc.mockReturnValue('docRef');
    setDoc.mockResolvedValue();
    deleteDoc.mockResolvedValue();
    collection.mockReturnValue('collectionRef');

    const { result } = renderHook(() => useFavorites());

    // Wait for useEffect to finish loading favorites
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Check that favorite is loaded
    expect(result.current.favorites).toEqual({ [favItem.docId]: favItem });
    expect(result.current.isFavorite(favItem.docId)).toBe(true);

    // Toggle off (remove)
    await act(async () => {
      await result.current.toggleFavorite(favItem);
    });
    expect(deleteDoc).toHaveBeenCalledWith('docRef');
    expect(result.current.isFavorite(favItem.docId)).toBe(false);

    // Toggle on (add)
    await act(async () => {
      await result.current.toggleFavorite(favItem);
    });
    expect(setDoc).toHaveBeenCalledWith('docRef', favItem);
    expect(result.current.isFavorite(favItem.docId)).toBe(true);

    // Remove directly
    await act(async () => {
      await result.current.removeFavorite(favItem.docId);
    });
    expect(deleteDoc).toHaveBeenCalledTimes(2);
    expect(result.current.isFavorite(favItem.docId)).toBe(false);
  });
});
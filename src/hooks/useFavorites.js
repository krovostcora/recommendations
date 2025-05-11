import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { doc, setDoc, deleteDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export function useFavorites() {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!user) {
            setFavorites({});
            setLoading(false);
            return;
        }

        const loadFavorites = async () => {
            const favsRef = collection(db, "users", user.uid, "favorites");
            const snapshot = await getDocs(favsRef);
            const favMap = {};
            snapshot.forEach(doc => {
                const data = doc.data();
                favMap[data.docId] = data;
            });
            setFavorites(favMap);
            setLoading(false);
        };

        loadFavorites();
    }, [user]);

    const isFavorite = useCallback((docId) => {
        return !!favorites[docId];
    }, [favorites]);

    const toggleFavorite = async (item) => {
        if (!user) {
            alert("Please login to save favorites");
            return;
        }

        const docRef = doc(db, "users", user.uid, "favorites", item.docId);
        if (favorites[item.docId]) {
            await deleteDoc(docRef);
            setFavorites(prev => {
                const newFavs = { ...prev };
                delete newFavs[item.docId];
                return newFavs;
            });
        } else {
            await setDoc(docRef, item);
            setFavorites(prev => ({
                ...prev,
                [item.docId]: item
            }));
        }
    };

    return {
        favorites,
        isFavorite,
        toggleFavorite,
        loading,
        setFavorites
    };

}

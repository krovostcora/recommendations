// src/pages/FavoritesPage.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';
import BookCard from '../components/cards/BookCard';
import MovieCard from '../components/cards/MovieCard';
import SeriesCard from '../components/cards/SeriesCard';
import CartoonCard from '../components/cards/CartoonCard';

export default function FavoritesPage() {
    const [user] = useAuthState(auth);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (!user) return;
        const fetchFavorites = async () => {
            const favRef = collection(db, 'users', user.uid, 'favorites');
            const snapshot = await getDocs(favRef);
            const data = snapshot.docs.map(doc => doc.data());
            setFavorites(data);
        };

        fetchFavorites();
    }, [user]);

    const renderCard = (item) => {
        // Показуємо картки відповідно до типу
        if (item.author) return <BookCard key={item.id} {...item} />;
        if (item.rating && item.type === 'series') return <SeriesCard key={item.id} {...item} />;
        if (item.rating) return <MovieCard key={item.id} {...item} />;
        return <CartoonCard key={item.id} {...item} />;
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Your Favorites</h2>
            <div className="card-grid">
                {favorites.length > 0
                    ? favorites.map(renderCard)
                    : <p style={{ textAlign: 'center' }}>No favorites yet</p>}
            </div>
        </div>
    );
}

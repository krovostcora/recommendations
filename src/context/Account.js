import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '/AuthContext';
import BookCard from '../components/cards/BookCard';
import MovieCard from '../components/cards/MovieCard';
import SeriesCard from '../components/cards/SeriesCard';
import CartoonCard from '../components/cards/CartoonCard';
import CardStyles from './cards/CardStyles';

export default function Account() {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (!user) return;
        const fetchFavorites = async () => {
            const favs = await getDocs(collection(db, "users", user.uid, "favorites"));
            setFavorites(favs.docs.map(doc => doc.data()));
        };
        fetchFavorites();
    }, [user]);

    if (!user) return <p>Please log in to view your account.</p>;

    // Групуємо збережені елементи за категоріями
    const categories = favorites.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div className="container">
            <h2>Your Favorites</h2>
            {Object.keys(categories).map((category) => (
                <div key={category}>
                    <h3>{category}</h3>
                    <div className="media-cards-container">
                        {categories[category].map((item) =>
                            switch (category) {
                                case 'Book':
                                    return <BookCard key={item.id} {...item} />;
                                case 'Movie':
                                    return <MovieCard key={item.id} {...item} />;
                                case 'Series':
                                    return <SeriesCard key={item.id} {...item} />;
                                case 'Cartoon':
                                    return <CartoonCard key={item.id} {...item} />;
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

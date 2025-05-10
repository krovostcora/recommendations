import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import BookCard from '../components/cards/BookCard';
import MovieCard from '../components/cards/MovieCard';
import SeriesCard from '../components/cards/SeriesCard';
import CartoonCard from '../components/cards/CartoonCard';

export default function FavoritesPage() {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Categorize favorites by type and remove duplicates
    const categorizedFavorites = favorites.reduce((acc, item) => {
        // Create a unique key for each item based on its essential properties
        const itemKey = `${item.type}-${item.id}-${item.title}`;

        // Skip if we've already processed this item
        if (acc.processedItems.has(itemKey)) {
            return acc;
        }
        acc.processedItems.add(itemKey);

        const type = item.type || 'other';
        if (!acc.categories[type]) {
            acc.categories[type] = [];
        }
        acc.categories[type].push(item);
        return acc;
    }, { categories: {}, processedItems: new Set() }).categories;

    const typeToComponent = {
        book: BookCard,
        movie: MovieCard,
        series: SeriesCard,
        cartoon: CartoonCard,
        default: ({ item }) => (
            <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
                <h3>{item.title || 'Untitled'}</h3>
                <p>Type: {item.type}</p>
                {item.poster && (
                    <img
                        src={item.poster || item.cover}
                        alt={item.title}
                        style={{ maxWidth: '100px' }}
                        onError={(e) => e.target.style.display = 'none'}
                    />
                )}
            </div>
        )
    };

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const fetchFavorites = async () => {
            try {
                console.log(`Fetching favorites for user ${user.uid}`);
                const favsCollection = collection(db, "users", user.uid, "favorites");
                const favsSnapshot = await getDocs(favsCollection);

                const favsData = favsSnapshot.docs
                    .map(doc => {
                        const data = doc.data();
                        if (data.userId !== user.uid) {
                            console.warn("Found favorite from wrong user:", data);
                            return null;
                        }
                        return {
                            ...data,
                            id: doc.id,
                            isFavorite: true
                        };
                    })
                    .filter(Boolean);

                console.log("Valid favorites:", favsData);
                setFavorites(favsData);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [user]);

    if (!user) return <p>Please log in to view favorites</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Favorites</h2>

            {favorites.length === 0 ? (
                <p>No favorites saved yet</p>
            ) : (
                <div>
                    <p>Total unique favorites: {favorites.length}</p>

                    {Object.entries(categorizedFavorites).map(([type, items]) => (
                        <div key={type} style={{ marginBottom: '30px' }}>
                            <h3 style={{ textTransform: 'capitalize', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                                {type} ({items.length})
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                gap: '20px',
                                marginTop: '15px'
                            }}>
                                {items.map((item) => {
                                    const Component = typeToComponent[item.type] || typeToComponent.default;
                                    return (
                                        <Component
                                            key={`${item.type}-${item.id}`}
                                            {...item}
                                        />
                                    );
                                })}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
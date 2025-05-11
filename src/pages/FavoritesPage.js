import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import BookCard from '../components/cards/BookCard';
import MovieCard from '../components/cards/MovieCard';
import SeriesCard from '../components/cards/SeriesCard';
import CartoonCard from '../components/cards/CartoonCard';
import MediaCard from "../components/cards/MediaCard";

export default function FavoritesPage() {
    const { user } = useAuth();
    const { favorites, loading, setFavorites } = useFavorites();

    if (!user) return <p>Please log in to view favorites</p>;
    if (loading) return <p>Loading...</p>;

    const favoritesArray = Object.values(favorites);

    const categorized = favoritesArray.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    const typeToComponent = {
        book: BookCard,
        movie: MovieCard,
        series: SeriesCard,
        cartoon: CartoonCard
    };

    const handleFavoriteToggle = (isNowFavorite, docId) => {
        if (!isNowFavorite) {
            setFavorites(prev => prev.filter(item => item.docId !== docId));
        }
    };


    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Favorites</h2>
            {favoritesArray.length === 0 ? (
                <p>No favorites saved yet</p>
            ) : (
                Object.entries(categorized).map(([type, items]) => {
                    const Component = typeToComponent[type] || MediaCard;
                    return (
                        <div key={type} style={{ marginBottom: '30px' }}>
                            <h3>{type} ({items.length})</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                gap: '20px'
                            }}>
                                {items.map(item => (
                                    <Component
                                        key={item.docId}
                                        {...item}
                                        onFavoriteToggle={handleFavoriteToggle}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

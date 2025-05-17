import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../hooks/useFavorites';
import MediaCard from "../components/MediaCard/MediaCard";

export default function FavoritesPage() {
    const { user } = useAuth();
    const { favorites, loading, removeFavorite } = useFavorites();

    if (!user) return <p>Please log in to view favorites</p>;
    if (loading) return <p>Loading...</p>;

    const favoritesArray = Object.values(favorites);

    const categorized = favoritesArray.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    const handleFavoriteToggle = (isNowFavorite, docId) => {
        if (!isNowFavorite) {
            removeFavorite(docId);
        }
    };

    const typeNames = {
        book: "Books",
        movie: "Movies",
        series: "TV Series",
        cartoon: "Cartoons"
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Favorites</h2>
            {favoritesArray.length === 0 ? (
                <p>No favorites saved yet</p>
            ) : (
                Object.entries(categorized).map(([type, items]) => (
                    <div key={type} style={{ marginBottom: '30px' }}>
                        <h3>{typeNames[type] || type} ({items.length})</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '20px'
                        }}>
                            {items.map(item => (
                                <MediaCard
                                    key={item.docId}
                                    {...item}
                                    onFavoriteToggle={handleFavoriteToggle}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
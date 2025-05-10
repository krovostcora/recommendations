import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function FavoritesPage() {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

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
                        // Verify the favorite belongs to current user
                        if (data.userId !== user.uid) {
                            console.warn("Found favorite from wrong user:", data);
                            return null;
                        }
                        return {
                            ...data,
                            id: doc.id
                        };
                    })
                    .filter(Boolean); // Remove any null entries

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

    console.log("Rendering favorites:", favorites);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Favorites</h2>

            {favorites.length === 0 ? (
                <p>No favorites saved yet</p>
            ) : (
                <div>
                    <p>Total favorites: {favorites.length}</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {favorites.map((item) => (
                            <li key={item.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
                                <h3>{item.title || 'Untitled'}</h3>
                                {item.poster && (
                                    <img
                                        src={item.poster}
                                        alt={item.title}
                                        style={{ maxWidth: '100px' }}
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
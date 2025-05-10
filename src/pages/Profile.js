import { useEffect, useState } from 'react';
import { db } from '../firebase';

function Profile({ user }) {
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState({});

    useEffect(() => {
        const fetchFavorites = async () => {
            const userFavoritesRef = db.collection('users').doc(user.uid).collection('favorites');
            const snapshot = await userFavoritesRef.get();
            const favoriteItems = snapshot.docs.map(doc => doc.data());
            setFavorites(favoriteItems);
        };

        if (user) {
            fetchFavorites();
        }

        // Завантажуємо збережені лайки з localStorage
        const savedLikes = localStorage.getItem('likes');
        if (savedLikes) {
            setLikes(JSON.parse(savedLikes));
        }
    }, [user]);

    const handleLike = (id) => {
        const updatedLikes = { ...likes };
        updatedLikes[id] = !updatedLikes[id]; // Перемикаємо статус лайка

        setLikes(updatedLikes);
        localStorage.setItem('likes', JSON.stringify(updatedLikes)); // Зберігаємо в localStorage
    };

    return (
        <div className="profile-page">
            <h2>Your Favorites</h2>
            <div className="favorites-list">
                {favorites.length > 0 ? (
                    favorites.map(item => (
                        <div key={item.id} className="favorite-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <button onClick={() => handleLike(item.id)}>
                                {likes[item.id] ? '❤️' : '🤍'} {/* Іконка залежно від лайка */}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No favorites yet!</p>
                )}
            </div>
        </div>
    );
}

export default Profile;

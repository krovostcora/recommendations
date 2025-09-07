import { useAuth } from "../context/AuthContext";
import { db } from '../firebase';
import { useEffect, useState } from 'react';

function Profile() {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState({});

    useEffect(() => {
        const fetchFavorites = async () => {
            if (user) {  // Make sure user is defined
                const userFavoritesRef = db.collection('users').doc(user.uid).collection('favorites');
                const snapshot = await userFavoritesRef.get();
                const favoriteItems = snapshot.docs.map(doc => doc.data());
                setFavorites(favoriteItems);
            }
        };

        fetchFavorites();

        const savedLikes = localStorage.getItem('likes');
        if (savedLikes) {
            setLikes(JSON.parse(savedLikes));
        }
    }, [user]);


    const handleLike = (id) => {
        const updatedLikes = { ...likes };
        updatedLikes[id] = !updatedLikes[id];

        setLikes(updatedLikes);
        localStorage.setItem('likes', JSON.stringify(updatedLikes));
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
                                {/*{likes[item.id] ? '❤️' : '🤍'} /!* Icon depending on like *!/*/}
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

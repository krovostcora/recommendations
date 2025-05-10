import React, { useState } from 'react';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import './CardStyles.css';

export default function CartoonCard({ title, year, country, type, genres, poster, item, user }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        if (!user) {
            alert("Please login to save favorites");
            return;
        }

        const docRef = doc(db, 'users', user.uid, 'favorites', item.id);

        if (isFavorite) {
            await deleteDoc(docRef);
        } else {
            await setDoc(docRef, item);
        }

        setIsFavorite(!isFavorite);
    };

    return (
        <div className="media-card">
            <img src={poster} alt={title} className="media-image" />
            <button className="favorite-button" onClick={toggleFavorite}>
                <img
                    src={isFavorite ? '/after_like.svg' : '/before_like.svg'}
                    alt="like"
                    className="favorite-icon"
                />
            </button>

            <div className="movie-info">
                <h3>{title}</h3>
                <p>{year} • {country}</p>
                <p>{type}</p>
            </div>
        </div>
    );
}

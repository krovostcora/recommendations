// src/components/cards/MediaCard.js
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import StarRating from '../StarRating';
import './CardStyles.css';

export default function MediaCard({ id, title, year, rating, poster, type, country, author, cover }) {
    const [user] = useAuthState(auth);
    const [isFavorite, setIsFavorite] = useState(false);

    const item = { id, title, year, rating, poster, type, country, author, cover };

    useEffect(() => {
        const savedLikes = localStorage.getItem('likes');
        if (savedLikes) {
            const likes = JSON.parse(savedLikes);
            setIsFavorite(likes[id] || false);
        }
    }, [id]);

    const handleLike = () => {
        const savedLikes = localStorage.getItem('likes');
        const likes = savedLikes ? JSON.parse(savedLikes) : {};

        likes[id] = !likes[id];
        setIsFavorite(likes[id]);

        localStorage.setItem('likes', JSON.stringify(likes));
    };

    const toggleFavorite = async () => {
        if (!user) {
            alert("Please login to save favorites");
            return;
        }

        const docRef = doc(db, 'users', user.uid, 'favorites', id);

        if (isFavorite) {
            await deleteDoc(docRef);
        } else {
            await setDoc(docRef, item);
        }

        setIsFavorite(!isFavorite);
    };

    return (
        <div className="media-card">
            <img src={poster || cover} alt={title} className="media-image" />
            <button className="favorite-button" onClick={handleLike}>
                <img
                    src={isFavorite ? '/after_like.svg' : '/before_like.svg'}
                    alt="like"
                    className="favorite-icon"
                />
            </button>

            <div className="media-info">
                <h3>{title}</h3>
                {author && <p><em>{author}</em></p>}
                <p>{year}{country && ` • ${country}`}{type && ` • ${type}`}</p>
                {rating && <StarRating rating={rating} />}
            </div>
        </div>
    );
}

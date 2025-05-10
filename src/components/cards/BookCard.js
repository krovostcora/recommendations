// src/components/cards/BookCard.js
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import StarRating from '../StarRating';
import './CardStyles.css';



export default function BookCard({ id, title, author, year, rating, cover }) {
    const [user] = useAuthState(auth);
    const [isFavorite, setIsFavorite] = useState(false);

    const item = { id, title, author, year, rating, cover };

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
            <img src={cover} alt={title} className="media-image" />
            <button className="favorite-button" onClick={toggleFavorite}>
                <img
                    src={isFavorite ? '/after_like.svg' : '/before_like.svg'}
                    alt="like"
                    className="favorite-icon"
                />
            </button>

            <h3>{title}</h3>
            <p><em>{author}</em></p>
            <p>{year}</p>
            <StarRating rating={rating} />

        </div>
    );
}

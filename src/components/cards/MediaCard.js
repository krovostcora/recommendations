import React, { useEffect, useState } from 'react';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import StarRating from '../StarRating';
import './CardStyles.css';
import { useAuth } from "../../context/AuthContext";
import PropTypes from 'prop-types';
import { onSnapshot } from 'firebase/firestore';


export default function MediaCard({
                                      id,
                                      title,
                                      year,
                                      rating = 0,
                                      poster,
                                      cover,
                                      type,
                                      country,
                                      author,
                                      genres = []
                                  }) {
    const { user } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Prepare the item data
    const item = {
        id: id.toString(),
        title,
        year: year || new Date().getFullYear(),
        rating: rating,
        poster: poster || cover || '',
        type: type,
        country: country || '',
        author: author || '',
        genres,
        createdAt: new Date().toISOString()
    };

    useEffect(() => {
        if (!user) {
            setIsFavorite(false);
            return;
        }

        const docId = `media_${id.toString()}`;
        const docRef = doc(db, "users", user.uid, "favorites", docId);

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            setIsFavorite(docSnap.exists());
        }, (error) => {
            console.error("Error with onSnapshot:", error);
            setIsFavorite(false);
        });

        return () => unsubscribe(); // Clean up listener on unmount
    }, [user, id]);


    const toggleFavorite = async () => {

        if (!user) {
            alert("Please login to save favorites");
            return;
        }

        setIsProcessing(true);
        try {
            const docId = `media_${id.toString()}`;
            const docRef = doc(db, "users", user.uid, "favorites", docId);

            if (isFavorite) {
                await deleteDoc(docRef);
                setIsFavorite(false);
                const checkAgain = await getDoc(docRef);
                if (checkAgain.exists()) {
                    console.warn("Still exists after deletion!");
                    setIsFavorite(true);
                }

            } else {
                await setDoc(docRef, {
                    id: id.toString(),
                    title,
                    year: year || new Date().getFullYear(),
                    rating: rating || 0,
                    poster: poster || cover || '',
                    type: type,
                    country: country || '',
                    author: author || '',
                    genres: genres || [],
                    userId: user.uid,  // Explicitly store user ID
                    docId,            // Store the compound ID
                    createdAt: new Date().toISOString()
                });
                setIsFavorite(true);
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
            alert("Failed to update favorites");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="media-card">
            <img
                src={imageError ? '/placeholder-image.jpg' : poster || cover}
                alt={title}
                className="media-image"
                onError={() => setImageError(true)}
            />
            <button
                className="favorite-button"
                onClick={toggleFavorite}

                disabled={isProcessing}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                {isProcessing ? (
                    <span className="loading-spinner" />
                ) : (
                    <img
                        src={isFavorite ? '/after_like.svg' : '/before_like.svg'}
                        alt=""
                        className="favorite-icon"
                    />
                )}
            </button>

            <div className="media-info">
                <h3>{title}</h3>
                {author && <p><em>{author}</em></p>}
                <p>
                    {}
                    {country && ` • ${country}`}
                </p>
                {genres.length > 0 && (
                    <p className="genres">{genres.join(', ')}</p>
                )}
                {/*<StarRating rating={resolvedRating} />*/}
            </div>
        </div>
    );
}

MediaCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating: PropTypes.number,
    poster: PropTypes.string,
    cover: PropTypes.string,
    type: PropTypes.string,
    country: PropTypes.string,
    author: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
};

MediaCard.defaultProps = {
    rating: 0,
    genres: []
};
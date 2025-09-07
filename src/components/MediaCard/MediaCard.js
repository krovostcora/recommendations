import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './CardStyles.css';
import { useAuth } from '../../context/AuthContext';
import {deleteDoc, doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import StarRating from '../../hooks/StarRating';

export default function MediaCard({
                                      id,
                                      title,
                                      year,
                                      rating ,
                                      poster,
                                      cover,
                                      type,
                                      country,
                                      author,
                                      genres = [],
                                      docId: propDocId,
                                      isFavorite: isFavoriteProp = null,
                                      onFavoriteToggle = null
                                  }) {
    const { user } = useAuth();
    const [isFavorite, setIsFavorite] = useState(!!isFavoriteProp);
    const [imageError, setImageError] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const resolvedDocId = propDocId || `media_${id.toString()}`;
    const docRef = user ? doc(db, "users", user.uid, "favorites", resolvedDocId) : null;

    useEffect(() => {
        if (!user || isFavoriteProp !== null) return;

        const checkFavorite = async () => {
            try {
                const snap = await getDoc(docRef);
                setIsFavorite(snap.exists());
            } catch (e) {
                console.error("Error checking favorite:", e);
            }
        };
        checkFavorite();
    }, [user, resolvedDocId, isFavoriteProp, docRef]);

    const toggleFavorite = async () => {
        if (!user) {
            alert("Please login to save favorites");
            return;
        }

        setIsProcessing(true);
        try {
            if (isFavorite) {
                await deleteDoc(docRef);
                setIsFavorite(false);
                onFavoriteToggle?.(false, resolvedDocId);
            } else {
                const itemData = {
                    id: id.toString(),
                    title,
                    year: year || new Date().getFullYear(),
                    rating,
                    poster: poster || cover || '',
                    type,
                    country: country || '',
                    author: author || '',
                    genres,
                    userId: user?.uid || '',
                    docId: resolvedDocId,
                    createdAt: new Date().toISOString()
                };
                await setDoc(docRef, itemData);
                setIsFavorite(true);
                onFavoriteToggle?.(true, resolvedDocId);
            }
        } catch (e) {
            console.error("Error toggling favorite:", e);
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
                        alt={isFavorite ? 'Liked' : 'Not liked'}
                        className="favorite-icon"
                    />
                )}
            </button>

            <div className="media-info">
                <h3>{title}</h3>
                {author && <p><em>{author}</em></p>}
                <p>{year} {country && `• ${country}`}</p>
                <StarRating rating={Number(rating) || 0} />
                {genres.length > 0 && <p className="genres">{genres.join(', ')}</p>}
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
    genres: PropTypes.arrayOf(PropTypes.string),
    docId: PropTypes.string,
    isFavorite: PropTypes.bool
};

MediaCard.defaultProps = {
    rating: 0,
    genres: [],
    isFavorite: null
};

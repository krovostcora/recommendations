import React from 'react';
import PropTypes from 'prop-types';

export default function StarRating({ rating = 0 }) {
    // Ensure rating is a valid number between 0 and 5
    const numericRating = Number(rating) || 0;
    const validatedRating = Math.min(Math.max(numericRating, 0), 5);
    const fullStars = Math.floor(validatedRating);
    const hasHalfStar = validatedRating % 1 >= 0.5;
    const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

    return (
        <div className="star-rating">
            {[...Array(Math.max(0, fullStars))].map((_, i) => (
                <span key={`full-${i}`} className="star full">★</span>
            ))}
            {hasHalfStar && <span className="star half">½</span>}
            {[...Array(Math.max(0, emptyStars))].map((_, i) => (
                <span key={`empty-${i}`} className="star empty">☆</span>
            ))}
            <span className="rating-value">({validatedRating.toFixed(1)})</span>
        </div>
    );
}

StarRating.propTypes = {
    rating: PropTypes.number
};

StarRating.defaultProps = {
    rating: 0
};
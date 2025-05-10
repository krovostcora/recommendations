// MovieCard.js
import React from 'react';
import MediaCard from './MediaCard';

export default function MovieCard({ id, title, year, country, rating, poster }) {
    return (
        <MediaCard
            id={id}
            title={title}
            year={year}
            country={country}
            rating={rating}
            poster={poster}
        />
    );
}

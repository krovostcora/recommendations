// CartoonCard.js
import React from 'react';
import MediaCard from './MediaCard';

export default function CartoonCard({ id, title, year, country, type, poster }) {
    return (
        <MediaCard
            id={id}
            title={title}
            year={year}
            country={country}
            type={type}
            poster={poster}
        />
    );
}

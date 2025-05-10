// BookCard.js
import React from 'react';
import MediaCard from './MediaCard';

export default function BookCard({ id, title, author, year, rating, cover }) {
    return (
        <MediaCard
            id={id}
            title={title}
            author={author}
            year={year}
            rating={rating}
            cover={cover}
        />
    );
}

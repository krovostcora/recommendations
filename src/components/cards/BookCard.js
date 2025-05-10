// BookCard.js
import React from 'react';
import MediaCard from './MediaCard';
import PropTypes from 'prop-types';

export default function BookCard({
                                     id,
                                     title,
                                     author,
                                     type,
                                     year,
                                     rating = 0,
                                     poster
                                 }) {
    return (
        <MediaCard
            id={id}
            title={title}
            author={author}
            type={type}
            year={year}
            rating={rating}
            cover={poster}
        />
    );
}

BookCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating: PropTypes.number,
    poster: PropTypes.string
};

BookCard.defaultProps = {
    author: '',
    type: 'book',
    year: '',
    rating: 0,
    poster: ''
};

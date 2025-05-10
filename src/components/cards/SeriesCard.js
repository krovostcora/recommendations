// SeriesCard.js
import React from 'react';
import MediaCard from './MediaCard';
import PropTypes from 'prop-types';

export default function SeriesCard({
                                       id,
                                       title,
                                       year,
                                       country,
                                       rating,
                                       poster,
                                       type
                                   }) {
    return (
        <MediaCard
            id={id}
            title={title}
            year={year}
            country={country}
            rating={rating}
            poster={poster}
            type={type}
        />
    );
}

SeriesCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    country: PropTypes.string,
    rating: PropTypes.number,
    poster: PropTypes.string,
    type: PropTypes.string
};

SeriesCard.defaultProps = {
    year: '',
    country: '',
    rating: 0,
    poster: '',
    type: 'series'
};

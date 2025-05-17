import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MediaFilter.css';

export default function MediaFilter({
                                        allGenres,
                                        allCountries,
                                        selectedGenres,
                                        selectedCountries,
                                        sortBy,
                                        ratingFilter,
                                        onGenreToggle,
                                        onCountryToggle,
                                        onSortChange,
                                        onRatingFilterChange,
                                        onClearFilters
                                    }) {
    const [activeTab, setActiveTab] = useState('genres');

    const hasActiveFilters =
        selectedGenres.length > 0 ||
        selectedCountries.length > 0 ||
        sortBy !== 'default' ||
        ratingFilter > 0;

    return (
        <div className="filter-container">
            <div className="filter-tabs">
                <button
                    className={`tab-button ${activeTab === 'genres' ? 'active' : ''}`}
                    onClick={() => setActiveTab('genres')}
                >
                    Genres
                </button>
                <button
                    className={`tab-button ${activeTab === 'countries' ? 'active' : ''}`}
                    onClick={() => setActiveTab('countries')}
                >
                    Countries
                </button>
                <button
                    className={`tab-button ${activeTab === 'sort' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sort')}
                >
                    Sort
                </button>
                <button
                    className={`tab-button ${activeTab === 'rating' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rating')}
                >
                    Rating
                </button>
            </div>

            <div className="filter-content">
                {activeTab === 'genres' && (
                    <div className="filter-section">
                        <div className="filter-buttons">
                            {allGenres.map(genre => (
                                <button
                                    key={genre}
                                    onClick={() => onGenreToggle(genre)}
                                    className={`filter-button ${
                                        selectedGenres.includes(genre) ? 'active' : ''
                                    }`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'countries' && (
                    <div className="filter-section">
                        <div className="filter-buttons">
                            {allCountries.map(country => (
                                <button
                                    key={country}
                                    onClick={() => onCountryToggle(country)}
                                    className={`filter-button ${
                                        selectedCountries.includes(country) ? 'active' : ''
                                    }`}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'sort' && (
                    <div className="filter-section">
                        <div className="sort-options">
                            <label className="sort-option">
                                <input
                                    type="radio"
                                    name="sort"
                                    checked={sortBy === 'default'}
                                    onChange={() => onSortChange('default')}
                                />
                                <span>Default</span>
                            </label>
                            <label className="sort-option">
                                <input
                                    type="radio"
                                    name="sort"
                                    checked={sortBy === 'year-asc'}
                                    onChange={() => onSortChange('year-asc')}
                                />
                                <span>Year (Oldest first)</span>
                            </label>
                            <label className="sort-option">
                                <input
                                    type="radio"
                                    name="sort"
                                    checked={sortBy === 'year-desc'}
                                    onChange={() => onSortChange('year-desc')}
                                />
                                <span>Year (Newest first)</span>
                            </label>
                            <label className="sort-option">
                                <input
                                    type="radio"
                                    name="sort"
                                    checked={sortBy === 'rating-asc'}
                                    onChange={() => onSortChange('rating-asc')}
                                />
                                <span>Rating (Low to High)</span>
                            </label>
                            <label className="sort-option">
                                <input
                                    type="radio"
                                    name="sort"
                                    checked={sortBy === 'rating-desc'}
                                    onChange={() => onSortChange('rating-desc')}
                                />
                                <span>Rating (High to Low)</span>
                            </label>
                        </div>
                    </div>
                )}

                {activeTab === 'rating' && (
                    <div className="filter-section">
                        <div className="rating-filter-container">
                            <div className="rating-filter-header">
                                <span>Minimum Rating:</span>
                                <span className="rating-value">
                                    {ratingFilter > 0 ? `${ratingFilter}+` : 'Any'}
                                </span>
                            </div>
                            <div className="star-rating-filter">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        className={`star-filter ${star <= ratingFilter ? 'active' : ''}`}
                                        onClick={() => onRatingFilterChange(star)}
                                        onMouseEnter={() => document.querySelectorAll('.star-filter').forEach((el, i) => {
                                            if (i < star) el.classList.add('hover');
                                        })}
                                        onMouseLeave={() => document.querySelectorAll('.star-filter').forEach(el => {
                                            el.classList.remove('hover');
                                        })}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <button
                                className="reset-rating"
                                onClick={() => onRatingFilterChange(0)}
                            >
                                Reset Rating
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {hasActiveFilters && (
                <button
                    onClick={onClearFilters}
                    className="clear-all-filters"
                >
                    Clear All Filters
                </button>
            )}
        </div>
    );
}

MediaFilter.propTypes = {
    allGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
    allCountries: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCountries: PropTypes.arrayOf(PropTypes.string).isRequired,
    sortBy: PropTypes.string.isRequired,
    ratingFilter: PropTypes.number.isRequired,
    onGenreToggle: PropTypes.func.isRequired,
    onCountryToggle: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired,
    onRatingFilterChange: PropTypes.func.isRequired,
    onClearFilters: PropTypes.func.isRequired
};
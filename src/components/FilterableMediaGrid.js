import React, { useState } from 'react';
import MediaFilter from './MediaFilter/MediaFilter';
import MediaCard from '../components/cards/MediaCard';
import './FilterableMediaGrid.css';

export function FilterableMediaGrid({ mediaItems, mediaType }) {
    // Get all unique values for filters
    const allGenres = [...new Set(mediaItems.flatMap(item => item.genres || []))]
        .sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }));

    const allCountries = [...new Set(mediaItems.map(item => item.country).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }));

    // State for all filters
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [ratingFilter, setRatingFilter] = useState(0);

    // Filter and sort logic
    let filteredItems = [...mediaItems];

    // Apply genre filter
    if (selectedGenres.length > 0) {
        filteredItems = filteredItems.filter(item =>
            selectedGenres.some(genre => item.genres?.includes(genre))
        );
    }

    // Apply country filter
    if (selectedCountries.length > 0) {
        filteredItems = filteredItems.filter(item =>
            selectedCountries.includes(item.country)
        );
    }

    // Apply rating filter
    if (ratingFilter > 0) {
        filteredItems = filteredItems.filter(item =>
            item.rating >= ratingFilter
        );
    }

    // Apply sorting
    switch (sortBy) {
        case 'year-asc':
            filteredItems.sort((a, b) => a.year - b.year);
            break;
        case 'year-desc':
            filteredItems.sort((a, b) => b.year - a.year);
            break;
        case 'rating-asc':
            filteredItems.sort((a, b) => a.rating - b.rating);
            break;
        case 'rating-desc':
            filteredItems.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Default sorting (original order)
            break;
    }

    return (
        <div className="media-page">
            <div className="media-header">
                <h2>{mediaType} Recommendations</h2>
                <div className="media-stats">
                    Showing {filteredItems.length} of {mediaItems.length} items
                </div>
            </div>

            <MediaFilter
                allGenres={allGenres}
                allCountries={allCountries}
                selectedGenres={selectedGenres}
                selectedCountries={selectedCountries}
                sortBy={sortBy}
                ratingFilter={ratingFilter}
                onGenreToggle={genre => setSelectedGenres(prev =>
                    prev.includes(genre)
                        ? prev.filter(g => g !== genre)
                        : [...prev, genre]
                )}
                onCountryToggle={country => setSelectedCountries(prev =>
                    prev.includes(country)
                        ? prev.filter(c => c !== country)
                        : [...prev, country]
                )}
                onSortChange={setSortBy}
                onRatingFilterChange={setRatingFilter}
                onClearFilters={() => {
                    setSelectedGenres([]);
                    setSelectedCountries([]);
                    setSortBy('default');
                    setRatingFilter(0);
                }}
            />

            <div className="media-grid">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <MediaCard
                            key={item.id}
                            {...item}
                            type={mediaType}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <p>No items match your filters</p>
                        <button
                            onClick={() => {
                                setSelectedGenres([]);
                                setSelectedCountries([]);
                                setSortBy('default');
                                setRatingFilter(0);
                            }}
                            className="reset-filters"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
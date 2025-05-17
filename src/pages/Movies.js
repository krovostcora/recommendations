import movies from '../components/json/movies.json';
import React from "react";
import { FilterableMediaGrid } from '../components/FilterableMediaGrid';

export default function Movies() {
    return <FilterableMediaGrid mediaItems={movies} mediaType="movies" />;
}
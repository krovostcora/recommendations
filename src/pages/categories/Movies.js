import movies from '../../components/json/movies.json';
import React from "react";
import { MediaGrid } from '../../components/MediaFilter/MediaGrid';

export default function Movies() {
    return <MediaGrid mediaItems={movies} mediaType="movies" />;
}
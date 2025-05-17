import series from '../components/json/series.json';
import React from "react";
import { FilterableMediaGrid } from '../components/FilterableMediaGrid';

export default function Series() {
    return <FilterableMediaGrid mediaItems={series} mediaType="series" />;
}
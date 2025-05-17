import series from '../../components/json/series.json';
import React from "react";
import { MediaGrid } from '../../components/MediaFilter/MediaGrid';

export default function Series() {
    return <MediaGrid mediaItems={series} mediaType="series" />;
}
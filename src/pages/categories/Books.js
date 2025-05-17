import React from "react";
import books from '../../components/json/books.json';
import { MediaGrid } from '../../components/MediaFilter/MediaGrid';

export default function Books() {
    return <MediaGrid mediaItems={books} mediaType="books" />;
}
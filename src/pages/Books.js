import React from "react";
import books from '../components/json/books.json';
import { FilterableMediaGrid } from '../components/FilterableMediaGrid';

export default function Books() {
    return <FilterableMediaGrid mediaItems={books} mediaType="books" />;
}
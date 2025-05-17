import React from "react";
import cartoons from '../components/json/cartoons.json';
import { FilterableMediaGrid } from '../components/FilterableMediaGrid';

export default function Cartoons() {
    return <FilterableMediaGrid mediaItems={cartoons} mediaType="books" />;
}
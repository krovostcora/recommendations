import React from "react";
import cartoons from '../../components/json/cartoons.json';
import { MediaGrid } from '../../components/MediaFilter/MediaGrid';

export default function Cartoons() {
    return <MediaGrid mediaItems={cartoons} mediaType="books" />;
}
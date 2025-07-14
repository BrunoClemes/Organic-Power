import React from 'react';
import { ImageContainer } from "./styles";

export const Image = ({ src, alt }) => {
    return (
        <ImageContainer src={src} alt={alt} />
    );
};
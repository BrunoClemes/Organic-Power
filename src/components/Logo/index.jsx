import React from 'react';
import { ImageContainer } from "./styles";

export const Logo = ({ src, alt }) => {
    return (
        <ImageContainer src={src} alt={alt} />
    );
};
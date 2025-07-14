import React from 'react';
import { IconContainer } from "./styles";

export const Icon = ({ src, alt }) => {
    return (
        <IconContainer src={src} alt={alt} />
    );
};
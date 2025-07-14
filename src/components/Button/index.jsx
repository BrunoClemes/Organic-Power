import React from 'react';
import { StyledButton } from './styles'; 

export const Button = ({ onClick, children }) => {
  return (
    <div>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};
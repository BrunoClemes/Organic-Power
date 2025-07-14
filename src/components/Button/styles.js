import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #44c767;
  border-radius: 3.125rem; /* 50px */
  border: 0.0625rem solid #18ab29; /* 1px */
  cursor: pointer;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1.25rem; /* 20px */
  padding: 0.125rem 1.875rem; /* 2px 30px */
  text-decoration: none;
  text-shadow: 0 0.0625rem 0 #2f6627; /* 1px */

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #5cbf2a;
  }

  &:active {
    position: relative;
    top: 0.0625rem; /* 1px */
  }

  img {
    height: 3.75rem; /* 60px */
    width: 3.75rem;  /* 60px */
    margin: 0.625rem; /* 10px */
  }
`;


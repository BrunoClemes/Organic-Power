import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: orangered;
  border: none;
  font-size: 2rem;
  padding: 0 0.625rem; /* 10px → 0.625rem */
  cursor: pointer;
  z-index: 2;
  border-radius: 0.25rem; /* 4px */

  &.left {
    left: 0.625rem; /* 10px */
  }

  &.right {
    right: 0.625rem; /* 10px */
  }
`;
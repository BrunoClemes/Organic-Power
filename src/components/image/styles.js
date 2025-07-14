import styled from "styled-components";

export const ImageContainer = styled.img`
  height: 33.75rem; 
  object-fit: cover;

  clip-path: polygon(
    0% 0%,
    85% 0%,
    100% 20%,
    90% 50%,
    100% 80%,
    85% 100%,
    0% 100%
  );

  margin-top: 1.5625rem;
  border: 0.25rem solid orangered;
  box-shadow: 0 0.625rem 1.5625rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(10%) contrast(110%);

  &:hover {
    transform: scale(1.04) rotate(-1deg);
    filter: none;
  }

@media screen and (max-width: 430px) {
  height: 15.75rem; 
  
  


  
}

`;
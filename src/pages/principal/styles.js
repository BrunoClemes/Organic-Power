import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: #1f1f1f;
  background-image:
    linear-gradient(145deg, #2c2c2c 0%, #1f1f1f 50%, #2c2c2c 100%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px);
  background-blend-mode: overlay;
  border-bottom: 2px solid orangered;

  @media screen and (max-width: 430px) {
    text-align: center;
    align-items: center;
  }
`;

export const LogoTipo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px;
  margin-bottom: 0;

  h2 {
    margin-left: 200px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    text-align: center;
    align-items: center;

    h2 {
      margin-left: 0;
    }
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  font-family: 'Orbitron', sans-serif;
  -webkit-text-stroke: 1px orangered;
  margin-bottom: 0.5rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  color: white;
  font-family: 'Orbitron', sans-serif;
  margin: 0;
`;

export const MenuIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  padding: 1rem;
  color: white;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #1f1f1f;
  padding: 1rem;
  border-top: 1px solid orangered;

  a {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      -webkit-text-stroke: 1px orangered;
    }
  }

  @media screen and (min-width: 601px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
  font-size: 1.25rem;
  padding: 0 2rem 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    -webkit-text-stroke: 1px orangered;
  }
`;

export const Main = styled.main`
  background: linear-gradient(135deg, #f0f4f8 25%, #d9e2ec 25%, #d9e2ec 50%, #f0f4f8 50%, #f0f4f8 75%, #d9e2ec 75%, #d9e2ec 100%);
  background-size: 3.5rem 3.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  align-items: center;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  align-items: center;

  h1, h2, p {
    font-family: 'Orbitron', sans-serif;
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 2rem;
    color: black;
  }

  h2 {
    color: black;
  }

  p {
    font-size: 1.25rem;
  }

  img {
    max-width: 40%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1.2rem;
    }

    img {
      max-width: 100%;
    }
  }
`;

export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;
  height: auto;
  width: 100%;
  border-bottom: 0.125rem solid orangered;
  align-items: center;
  text-align: center;

  h2 {
    color: black;
    margin-top: 0.625rem;
  }

  h1 {
    margin-top: 0;
    width: 50%;
  }

  p {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.875rem;
   
    width: 70%;
  }
  
  @media screen and (max-width: 600px){
    flex-direction: column;
    margin: 20px;
    height: auto;
    width: auto;
    margin-top: 0;

    h1 {
      font-size: 1.6rem;
      width: auto;
    }

    p {
     font-size: 1.0rem;
      margin-left: 0;
      width: auto;
    }
  }
`;

export const Resources = styled.div`
  min-height: 36.875rem; /* opcional */
  height: auto; 
  background-color: #d9e2ec;
  text-align: center;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 0.125rem solid orangered;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.1875rem;
  }
    
  @media screen and (max-width: 600px){
    p{
    font-size: 0.8rem;
    }

    img{
      height: 50px;
      width: 50px;
      
    }
`;

export const Table = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  gap: 6.25rem;
  
  

  @media screen and (max-width: 600px) {
     flex-direction: column;
     gap: 0;
     font-size: 1rem;
       text-align: center;
      align-items: center;
  }
`;

export const Colum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
    text-align: center;
  align-items: center;
  

    
  }
`;

export const Resouseces1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 31.25rem;
  height: 6.25rem;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 0.125rem solid orangered;
  margin-top: 0.625rem;

   @media screen and (max-width: 600px) {
    width: 20rem;
   }
  
`;

export const ChooseOrganicPower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.125rem solid orangered;
  

  p {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.875rem;
    margin-bottom: 0.9375rem;
  }

  h1 {
    margin-top: 0;
  }


  @media screen and (max-width: 600px) {
    width: auto;
   display:flex;
   flex-direction: column;
    text-align: center;
    align-items: center;

  p {
    font-family: 'Orbitron', sans-serif;
     font-size: 1rem;
    margin-bottom: 0.9375rem;
  
  }
`;

export const Panel = styled.div`
  display: flex;
  gap: 6.25rem;
  margin-bottom: 0.9375rem;
  margin-top: 0.625rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerPanel = styled.div`
  margin-top: 6.25rem;
  display: flex;
  flex-direction: column;
  width: 21.875rem;
  height: auto;
  margin: 0.9375rem;
  align-items: center;
  border: 0.125rem solid orangered;
  text-align: center;
  border-radius: 1.5625rem;

  img {
    margin: 0.625rem;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.625rem;
  }

  p {
    font-size: 1.25rem;
    margin: 0.625rem;
  }
`;

export const ContainerCarousel = styled.div`
  width: auto;
  text-align: center;
  align-items: center;
  background-color: #d9e2ec;
  background-blend-mode: overlay;
  border: 0.125rem solid orangered;

  img {
    width: 53.125rem;
    height: 28.125rem;
    border-radius: 1.5625rem;
    border: 0.125rem solid orangered;
    margin: 1.25rem;
  }

  h2 {
    color: #1f1f1f;
  }

  h1 {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    
   img {
      width: 75%;
      height: auto;
      margin: 0.5rem 0;
      gap:15px;

    }

     h2 {
    font-size: 1.25rem;
  }

  h1 {
    margin: 0;
    font-size: 1.90rem;
    margin:15px;
  }

  }
`;

export const YouWin = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-image: 
    linear-gradient(145deg, #ff9900 0%, orangered 50%, #ff9900 100%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 0.01875rem, transparent 0.01875rem, transparent 0.0375rem);
  border: 0.125rem solid orangered;
  gap: 1.5625rem;

  img {
    border: none;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerYouWin = styled.div`
  background-blend-mode: overlay;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  ul {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5625rem;
    margin: 0.3125rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5625rem; 
  }

  li {
    font-size: 1.5625rem;
    margin-bottom: 0.9375rem;
    color: #d9e2ec;
  }

  @media screen and (max-width: 430px) {
    ul {
      font-size: 1.2rem;
      gap: 1rem;
    }
    li {
      font-size: 1.2rem;
    }
  }
`;


export const WhoWeAre = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 2rem;
  background-color: #1f1f1f;
  background-image:
    linear-gradient(145deg, #2c2c2c 0%, #1f1f1f 50%, #2c2c2c 100%);
  border-bottom: 2px solid orangered;
  flex-wrap: wrap;

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 1rem;
    flex-shrink: 0;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 12rem;
      height: 12rem;
      margin-bottom: 1rem;
    }
      h1{
      font-size: 2.2rem;
      }
  }
`;

export const NameContainer = styled.div`
  width: 30%;
  margin: 1rem;
  text-align: center;

  h1, h2 {
    margin: 0.2rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    
  }
`;

export const TextWhoWeAre = styled.div`
  width: 40%;
  margin: 1rem;
  color: #d9e2ec;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  text-align: left;

  h1, h2 {
    margin: 0.5rem 0 1rem 0;
  }

  p {
    line-height: 1.5;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    text-align: center;
    font-size: 1rem;
  }
`;

export const Demonstration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 9.375rem;
  height: 25rem;
  border: 0.125rem solid orangered;

  button {
    font-family: 'Orbitron', sans-serif;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    height: auto;
    padding: 2rem 1rem;

  h2{
    
  }
`;

export const DemosntrationText = styled.div`
  margin-top: 3.125rem;
  width: 30%;
  height: 17rem;
  margin-left: 15.625rem;
  margin-bottom: 1.875rem;

  h2 {
    font-size: 1.875rem;
    color: black;
    margin-bottom: 0;
  }

  h1 {
    margin-top: 0;
  }

  p {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5625rem;
    margin: 1.875rem 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 1rem;
    height: auto;

    p {
      font-size: 1.2rem;
    }
      
    h1{
     font-size: 2.2rem;
      }
    
    h2{
    font-size: 1.2rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 1rem; 
  width: auto;
  background-color: #1f1f1f;
  background-image:
    linear-gradient(145deg, #2c2c2c 0%, #1f1f1f 50%, #2c2c2c 100%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.02) 0.0625rem, transparent 0.0625rem, transparent 0.125rem);

  text-align: center;
  color: #ccc; 
`;

export const IconButtonFooter = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    height: 5rem;
    width: 5rem;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 430px) {
  
    flex-direction: column;
    align-items: center;
  }
`;

export const Rights = styled.div`
  display: flex;
  margin-right: 0;
  font-size: 0.9375rem;
  gap: 3.125rem;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;



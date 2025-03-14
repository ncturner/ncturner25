import styled from "styled-components";

export const HomeContainer = styled.div`
  
`

export const HomeHeadline = styled.div`
  font-weight: 600;
  font-size: 1.85rem;
  margin: 2rem 3rem;
`

export const HomeBkgd = styled.div`
  position: relative;
  width:100%;
  overflow: visible;
`

export const HomePic = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 88vh;

  img {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    top: 0;
    z-index: 0;
    object-fit: cover;
  }
`


export const HomeSubhead = styled.div`
  font-weight: 200;
  font-size: 3rem;
  margin: 0 0 2rem 0;
  line-height: 3.5rem;
`

export const HomeContent = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 2rem 3rem;
  width: 50%;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #e75a58;
    }
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`
export const Footer = styled.div`
  margin: 4rem 3rem;

  @media screen and (max-width: 1100px) {
    margin: 4rem 3rem;
    grid-template-columns: 1fr;
  }
`

export const FooterMain = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

export const FooterText = styled.div`
  font-size: 1.25rem;
`
export const FooterLinks = styled.div`
  height: 2rem;
  display: flex;
  margin: 2rem auto;
`

export const FooterLink = styled.div`
  display: flex;
  
  margin: 0 1.5rem 0  0;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: #e75a58; 
  }
`


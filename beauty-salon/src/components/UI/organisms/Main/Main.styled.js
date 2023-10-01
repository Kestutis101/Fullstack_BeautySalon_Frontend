import styled from "styled-components";

export const StyledMainDiv = styled.div`
  font-family: "Caveat", cursive;
  width: 80%;
  margin: auto;

  footer {
    text-align: center;
    margin: 0.5em auto 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: larger;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: justify;
  margin: auto;
  font-size: 1.3em;
`;

export const StyledImgDiv = styled.div`
  display: flex;
  justify-content: start;
  text-align: justify;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: #888888 #f5f5f5;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 8px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
    overflow-x: hidden; 

    img {
      margin: 0 auto;
      min-width: 25rem; 
      height: auto; 
    }
  }
`;

export const StyledImg = styled.img`
  width: 30%;
  margin-right: 3em;

    :last-child {
      margin-right: 0;
    }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

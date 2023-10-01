import styled from "styled-components";

export const StyledDiv = styled.div`
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 2% auto 0;

  img {
    display: block;
    margin: auto 0;
    width: 20%;
    height: 15%;
  }

  div {
    display: flex;
    width: 50%;

    p {
      font-size: 2.5em;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }

  a {
    margin: 1em;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
    position: relative;
    top: 0;
    transition: all 0.3s;
    :hover {
      color: rgb(186, 131, 41, 0.9);
      top: -0.2em;
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;

    img {
      width: 50%; 
      height: auto;
      margin: 0 auto; 
    }

    div {
     display: flex;
     flex-direction: column;
     width: auto;
      p {
        margin: 0 auto 2rem;
        font-size: 3em;
      }
    }
  }
`;

export const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 10%;
`;

import styled from "styled-components";

export const StyledBackground = styled.div`
  font-family: "Caveat", cursive;
  font-size: larger;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6b6a6a;
  margin: auto;
  padding: 1.2em;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 30vw;
  max-height: 50vw;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    input {
      border: none;
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 1rem;

      :focus {
        outline: none;
        background-color: #f8dda3;
      }
    }
  }

  button {
    background-color: #6de554;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;

    :first-of-type {
      transition: background-color 0.5s, box-shadow 0.5s;
      :hover {
        background-color: #3cc022;
        box-shadow: 1px 1px 3px 2px grey;
      }
    }

    :last-of-type {
      background-color: #e6555c;
      color: white;
      transition: background-color 0.5s, box-shadow 0.5s;
      :hover {
        background-color: #cc1919;
        box-shadow: 1px 1px 3px 2px grey;
      }
    }
  }

  span {
    color: #FE5757;
  }

  .nothing-change {
    font-size: larger;
    text-align: center;
    margin: 1rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
  flex-direction: column;
  background-color: #6b6a6a;
  margin: auto;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 60vw;
  max-height: 80vw;
  width: 100%;
  }

  h2 {
    font-size: 1.3rem;
    margin: 0 0 0.8rem 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.6rem;
    font-size: 1em;

    input {
      border: none;
      border-radius: 5px;
      padding: 0.3rem;
      font-size: 0.9rem;

      :focus {
        outline: none;
        background-color: #f8dda3;
      }
    }
  }

  button {
    background-color: #6de554;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    }
`;

import styled from "styled-components";

export const StyledMainDiv = styled.div`
  width: 80%;
  font-family: "Caveat", cursive;
  font-size: 1.5em;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 80%;
    font-size: 1.1em;
  }
`;

export const StyledHeadingOne = styled.h1`
  text-align: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 20px;
`;

export const StyledTableCell = styled.td`
  padding: 0.5em;
`;

export const StyledButtonEdit = styled.button`
  background-color: #fcf2dc;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  padding: 0.35em 0.8em;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s;

  :hover {
    background-color: #eaae41;
    box-shadow: 1px 1px 3px 1px;
  }
`;

export const StyledButtonDelete = styled.button`
  background-color: #fcf2dc;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  padding: 0.35em 0.8em;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s;

  :first-child:hover {
    background-color: red;
    box-shadow: 1px 1px 3px 1px;
  }
`;

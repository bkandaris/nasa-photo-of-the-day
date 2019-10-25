import React from "react";
import styled from 'styled-components';

//styled component

const Headerh1 = styled.h1`
  border-bottom: 3px solid green;
  width: 50%;
  margin: 10px auto 20px auto;
  padding-bottom: 20px;
`;



function Header() {
  return (
    <Headerh1>Nasa Photo of the day!</Headerh1>
  )
}




export default Header;
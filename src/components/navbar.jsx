import React from "react";
import styled from "styled-components";

const Navstyle = styled.div`
  background: black;
  color: white;
  font-size: 1.3rem;
`;

const Liststyle = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const Linkstyle = styled.a`

  &:hover {
    background: white;
    color: black;
  }

  ${props => (props.type === "primary" ? `color: red` : null)}

  ${props => (props.type === "secondary" ? `color: lightgreen` : null)}

  ${props => (props.type === "third" ? `color: orange` : null)}
`;

function Navbar() {
  return (
    <Navstyle>
      <Liststyle>
        <Linkstyle type="primary">About</Linkstyle>
        <Linkstyle type="secondary">Contact</Linkstyle>
        <Linkstyle type="third">Nasa Home Page</Linkstyle>
      </Liststyle>
    </Navstyle>
  );
}

export default Navbar;

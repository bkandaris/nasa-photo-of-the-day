import React from "react";
import styled from "styled-components";

const Footerstyle = styled.footer`
  background: green;
  color: white;
  font-size: 1.5rem;
  margin-top: 15px;

  ${props => (props.type === "primary" ? `background: green;` : null)}
  ${props => (props.type === "secondary" ? `background: red;` : null)}
`;

function Footer() {
  return <Footerstyle type="secondary">Copyright Lambda School</Footerstyle>;
}

export default Footer;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Cardstyle = styled.div`
  width: 80%;
  font-size: 1.2rem;
  margin: auto;
  padding: 10px;
  border: 2px solid green;
  border-radius: 10px;

  ${props => (props.type === "primary" ? `background: lightyellow` : null)}
  ${props => (props.type === "secondary" ? `background: lightgreen` : null)}
`;

const Imagestyle = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 10px;
`;

const Vidstyle = styled.iframe`
  height: 300px;
  width: 300px;
  border-radius: 10px;
`;

function Card() {
  const [state, setState] = useState();

  useEffect(() => {
    // We should put this within the function, watches for any state change
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=CUQH81Zi2NuaEUqKZGJI7BF6JXzHHhwhzuqxqEVV" // The '//'s/ are custom APIS
      )
      .then(response => {
        // Gets our Object 'resonse'
        console.log(`this is response:`, response);
        setState(response.data); // Setting our state to the object we received
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // If there is nothing in the array it will run on any state change, if the array does have something in it it will only run when the var, val, or state changes, covers all of the bases for any state changes

  if (!state) {
    // Asynch code, it will hit it so fast the request can't complete so this check is here
    // Make sure to do this if state is undefined, if not true, run it.. checking to see if state is empty, shows h1 if state is empty
    return <h1>Loading...</h1>;
  }

  if (state.url.includes("jpg")) {
    return (
      <Cardstyle type="secondary">
        <Imagestyle src={state.url} alt="Photo of the day" />
        <h2>{state.title}</h2>
        <p>{state.explanation}</p>
      </Cardstyle>
    );
  } else {
    return (
      <Cardstyle type="primary">
        <Vidstyle title="vid" src={state.url}></Vidstyle>
        <h2>{state.title}</h2>
        <p>{state.explanation}</p>
      </Cardstyle>
    );
  }
}

export default Card;

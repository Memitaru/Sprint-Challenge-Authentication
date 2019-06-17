import React from "react";
import styled from "styled-components";

const JokeBox = styled.div`
    width: 80%;
    max-width: 600px;
    border: 2px solid dodgerblue;
    font-size: 26px;
    padding: 10px;
    margin: 20px auto;
`;

const Joke = props => {
  return <JokeBox>{props.joke}</JokeBox>;
};

export default Joke;

import React, { useState } from "react";
import styled from "styled-components";
import narutoImg from "../../images/naruto.png";
import { Quotes } from "../../components";
import { getQuote } from "../../services";

export function App() {
  const [quoteState, setQuoteState] = useState({
    quote: "ok",
    speaker: "Speaker",
  });
  const onUpdate = async () => {
    const quote = await getQuote();
    console.log(quote);
    setQuoteState(quote);
  };

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="imagen" />
    </Content>
  );
}

const Content = styled.div`
height: 100vh;
padding; 0 50px;
display: flex;
justify-content: center;
align-items: center;
`;
const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

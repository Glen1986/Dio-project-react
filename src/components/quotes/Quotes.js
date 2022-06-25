import styled from 'styled-components';
import {string} from 'prop-types';

export const Quotes = ({quote, speaker}) =>{
  return(
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <button>click</button>
    </Wrapper>
  );
};

Quotes.protoTypes = {
  quote: string,
  speaker: string
};

const Wrapper = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items: center; 
`
const Quote = styled.p`
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
  flex: 1;
  margin: 0;
`;
const Speaker = styled(Quote)`
text-align:right;
margin-bottom:50px;
`

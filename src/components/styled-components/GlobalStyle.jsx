import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Verdana;
    ::-webkit-scrollbar {
    display: none;
}
  }
`;

export default GlobalStyle;

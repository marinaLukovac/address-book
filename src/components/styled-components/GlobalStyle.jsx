import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    box-size: border-box;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
    display: none;
}
  }
`;

export default GlobalStyle;

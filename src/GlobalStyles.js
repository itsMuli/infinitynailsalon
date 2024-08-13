// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #333;
    line-height: 1.6;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Adjust the max-width as needed */
  padding: 20px;
`;

export default GlobalStyles;

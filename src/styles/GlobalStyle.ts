import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;        
    }

    body {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    h2, h4, p {
        margin: 0;        
    }
`;

export default GlobalStyle;

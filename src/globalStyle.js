import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        scroll-behavior: smooth;
    }

    button,
    a {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        * {
            font-size: 9px;
        }
    }
`

export default GlobalStyle;
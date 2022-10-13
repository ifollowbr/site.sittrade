import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 22px;
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
        scroll-behavior: smooth;
    }

    button,
    a {
        cursor: pointer;
    }
`

export default GlobalStyle;
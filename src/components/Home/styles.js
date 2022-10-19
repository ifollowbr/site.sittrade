import styled from 'styled-components';

export const HomeContainer = styled.div`
    > .loading {
        background: #fff;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
`;

export const HomeTopoContainer = styled.div`
    background-image: url('https://istockblobs.blob.core.windows.net/sitesittrade/fundo-inicio.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
    height: 100vh;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 100%;
    }

    > .body > figure {
        height: 200px;
    }

    > .body > figure > img{
        height: 100%;
    }

    > .body > div > :first-child {
        font-size: 6em;
        font-weight: 100;
        font-style: italic;
        color: #D4A026;
        line-height: 65px;
    }

    > .body > div > :nth-child(2) {
        font-size: 6em;
        font-weight: 100;
        font-style: italic;
        margin-left: 67px;
        line-height: 55px;
    }

    > .body > div > :nth-child(3) {
        font-size: 6em;
        font-weight: 100;
        font-style: italic;
        color: #D4A026;
        margin-left: 30px;
        line-height: 70px;
    }

    > .body > div > :nth-child(3) > strong {
        font-size: 1em;
        font-weight: 100;
        font-style: italic;
        color: #D9000D;
    }

    > .body > div > :last-child {
        font-size: 6em;
        font-weight: 100;
        font-style: italic;
        color: #D9000D;
        margin-left: 170px;
        line-height: 90px;
    }

    > .saiba-mais-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;

        font-style: italic;
        cursor: pointer;
    }

    > .saiba-mais-container > p > strong {
        font-weight: 500;
    }

    > .saiba-mais-container > figure {
        height: 20px;
    }

    > .saiba-mais-container > figure > img {
        height: 100%;
    }
`;

export const QuemSomosContainer = styled.div`
    min-height: 100vh;

    > .description-container {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 15%;
        margin: 80px 10% 0;
        padding: 40px;
    }

    > .description-container > img {
        height: 200px;
    }

    > .description-container > h2 {
        font-size: 6em;
        font-weight: 300;
        font-style: italic;
        color: #000;
        display: flex;
        flex-direction: column;
        line-height: 70px;
    }

    > .description-container > h2 > span{
        font-size: 1em;
        color: #D4A026;
    }

    > .description-container > p {
        color: #000;
    }

    > .description-container > p > strong{
        color: #000;
    }

    > p {
        color: #000;
        text-align: center;
        font-style: italic;
        margin: 40px 0 80px;
    }

    > p > strong{
        color: #000;    
    }

    > .images-container {
        display: flex;
        justify-content: space-between;
        column-gap: 4px;

        width: 100%;
    }

    > .images-container > figure {
        width: 20%;
    }

    > .images-container > figure > img {
        width: 100%;
    }
`;

export const OqueFazemosContainer = styled.div`
    > .oque-fazemos-container {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10%;

        margin: 50px 10%;
    }

    > .oque-fazemos-container > img {
        height: 200px;
    }

    > .oque-fazemos-container > h2 {
        display: flex;
        flex-direction: column;

        font-size: 6em;
        font-weight: 300;
        font-style: italic;
        line-height: 70px;
        color: #000;
    }

    > .oque-fazemos-container > h2 > span {
        color: #D51B17;
        font-size: 1em;
    }

    > .oque-fazemos-container > p {
        color: #000;
        max-width: 500px;
    }

    > .oque-fazemos-container > p > strong {
        color: #000;
    }

    > .itens-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10%;

        width: 70%;
        margin: 0 auto;
    }

    > .itens-container > .item {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    > .itens-container > .item > h3 {
        font-size: 2em;
        font-weight: 500;
        font-style: italic;
        color: #000;
    }

    > .itens-container > .item > div {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
    }

    > .itens-container > .item > div > img {
        width: 60px;
    }

    > .itens-container > .item > div > p {
        color: #000;
    }

    > .itens-container > .item > div > p > a,
    > .itens-container > .item > div > p > a:link,
    > .itens-container > .item > div > p > a:active,
    > .itens-container > .item > div > p > a:visited {
        color: #D7B13B;
    }

    > .map-container {
      background-color: #000;  

      position: relative;
      z-index: -1;
      height: 400px;
      margin-top: 150px;
    }

    > .map-container > figure {
        height: 120%;
        position: absolute;
        top: -10%;
        left: 10%;
    }

    > .map-container > figure > img {
        height: 100%;
    }

    > .map-container > section {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 10%;

        width: 40%;
        height: min-content;
    }

    > .map-container > section > h2 {
        font-size: 2.5em;
        font-weight: 300;
        margin-bottom: 10px;
    }

    > .map-container > section > h2 > strong {
        font-size: 1em;
        font-weight: 300;
        color: #D51B17;
    }

    > .map-container > section > h2 > strong > span{
        font-size: 1em;
        font-weight: 300;
        color: #EFBF2D;
    }
`;

export const CasesContainer = styled.div`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        text-align: center;
        font-size: 6em;
        font-style: italic;
        font-weight: 300;
        color: #D51B17;
    }

    > p {
        text-align: center;
        color: #000;
        font-size: 1.2em;

        margin: 40px 0;
    }

    > p > strong {
        color: #000;
        font-size: 1em;
    }

    > .images-container {
        display: flex;
        column-gap: 5%;
        margin: 0 10%;
    }

    > .images-container > div {
        display: grid;
        grid-template-areas: 
        'guarana guarana1 hoegaarden pepsi'
        'colorado guarana1 vivant beats1'
        'bud redbull beats beats1';
        gap: 4px;
        width: 100%;
    }

    > .images-container > div > figure > img {
        width: 100%;
        height: 100%;
    }

    > h2 {
        color: #D7B13B;
        text-align: center;
        font-size: 4em;
        font-style: italic;
        font-weight: 300;
        margin: 40px 0 20px;
    }

    > a,
    > a:visited,
    > a:active,
    > a:link {
        color: #000;
        text-align: center;
        margin: 0 auto;
        font-size: 1.2em;
    }
`;

export const ClientesContainer = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    column-gap: 10%;

    > img {
        height: 200px;
    }

    > h1 {
        display: flex;
        flex-direction: column;
        font-weight: 300;
        font-size: 3em;
    }

    > h1 > strong {
        color: #EFBF2D;
        font-weight: 300;
        font-size: 1em;
    }

    > .carousel {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 440px;
        height: 200px;
    }

    > .carousel > .logos-container {
        position: relative;
        overflow: hidden;
        width: 440px;
        height: 150px;
    }

    > .carousel > .logos-container > .images-container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: left 0.5s linear;
    }

    > .carousel > .logos-container > .images-container > figure {
        width: 120px;
        height: 100%;
        margin: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > .carousel > .logos-container > .images-container > figure > img {
        width: 100%;
    }

    > .carousel > .buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 4px;

        width: 100%;
    }

    > .carousel > .buttons-container > button {
        width: 16px;
        height: 16px;
        border-radius: 100%;
    }

    > .carousel > .buttons-container > button:disabled {
        border: none;
    }
`;
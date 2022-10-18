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

export const OqueFazemosContainer = styled.div``;

export const CasesContainer = styled.div``;
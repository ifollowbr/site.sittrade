import styled from 'styled-components';

export const CasesContainer = styled.div`
    padding: 20px 150px;
    width: 100%;
    max-width: 1580px;
    margin: 60px auto 0;

    > .fixed-container {
        position: fixed;
        top: 0;
        bottom: 0;
        margin: auto 0;

        display: flex;
        align-items: center;
        column-gap: 30px;
        z-index: -1;
        height: 500px;
    }

    > .fixed-container > img {
        height: 200px;
    }

    > .fixed-container > section {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    > .fixed-container > section > h1 {
        color: #D51B17;
        font-size: 6em;
        font-weight: 300;
        font-style: italic;
        line-height: 80px;
    }

    > .fixed-container > section > p {
        color: #000;
        font-size: 1.5em;
        font-weight: 400;
        width: 60%;
        margin-left: 20px;
    }

    > .fixed-container > section > p > strong {
        color: #000;
        font-size: 1em;
        font-weight: 500;
    }
    
    > .fixed-container > section > span {
        color: #000;
        margin-left: 20px;
    }

    > .images-container {
        width: 55%;
        max-width: 700px;
        margin-left: auto;    
        display: grid;
        grid-template-areas: 
        'guarana vivant'
        'pepsi colorado'
        'beats1 guarana1'
        'hoegaarden bud'
        'redbull beats';
        gap: 3px;
    }

    > .images-container > figure {
        height: 220px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        padding: 0px 5%;

        > .fixed-container {
            position: initial;
            margin: 0 auto;
            height: 100px;
            justify-content: center;
            column-gap: 10px;
        }

        > .fixed-container > img {
            height: 60px;
        }
        
        > .fixed-container > section {
            row-gap: 10px;
        }

        > .fixed-container > section > h1 {
            font-size: 2.5em;
            line-height: 20px;
        }

        > .fixed-container > section > p {
            font-size: 1em;
            margin-left: 5px;
        }

        > .fixed-container > section > span {
            margin-left: 5px;
        }

        > .images-container {
            width: 90%;
            max-width: 400px;
            margin: 0 auto;
        }

        > .images-container > figure {
            height: 140px;
        }   

        > .images-container > figure > img {
        }
    }
`;
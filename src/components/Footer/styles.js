import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #fff;

    > .body {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 100%;
        padding: 70px 0;
    }

    > .body > .left {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    > .body > .left > h1 {
        color: #000;
        font-size: 2.5em;
        font-weight: 300;
        width: 350px;
        font-style: italic;
    }

    > .body > .left > h1 > strong {
        color: #D7B13B;
        font-size: 1em;
        font-weight: 400;
    }

    > .body > .left > p {
        font-size: 2em;
        color: #D9000D;
        font-style: italic;
    }

    > .body > .right {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        text-align: left;
    }

    > .body > .right > h1 {
        color: #D7B13B;
        font-weight: 100;
        font-size: 5em;
        line-height: 26px;
        font-style: italic;
    }

    > .body > .right > h2 {
        color: #D9000D;
        font-weight: 300;
        font-size: 3em;
        font-style: italic;
    }

    > .body > .right > p {
        padding: 10px;
        width: 280px;
        color: #000;
    }

    > .body > .right > div {
        display: flex;
        column-gap: 15px;
        padding: 10px;
    }

    > .body > .right > div > a {
        width: 50px;
    }

    > .body > .right > div > a > img {
        width: 100%;
        cursor: pointer;
    }

    > .footer {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 5%;

        background-color: #000;
    }

    > .footer > img {
        height: 60%;
    }

    > .footer > p {
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        > .body {
            padding: 20px 0;
        }

        > .body > .left {
            row-gap: 10px;
        }

        > .body > .left > h1 {
            font-size: 1.5em;
            width: 110px;
        }

        > .body > .left > p {
            font-size: 1em;
        }

        > .body > .right {
            row-gap: 3px;
        }

        > .body > .right > h1 {
            font-size: 2.5em;
            line-height: 10px;
        }

        > .body > .right > h2 {
            line-height: 10px;
            font-size: 2em;
        }

        > .body > .right > p {
            width: 150px;
            padding: 5px;
        }

        > .body > .right > div {
            column-gap: 5px;
            padding: 5px;
        }

        > .body > .right > div > a {
            width: 25px;
        }

        > .footer {
            height: 30px;
        }
    }
`;
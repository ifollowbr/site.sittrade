import styled from 'styled-components';

export const ModalHeaderNavContainer = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #000000;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;

    > img {
        height: 80%;
        cursor: pointer;
    }

    > .menu-container {
        display: flex;
        align-items: center;
        column-gap: 20px;
        height: 100%;
        cursor: pointer;
    }

    > .menu-container > img {
        height: 50%;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 100%;

    > .circulos {
        height: 200px;
    }

    > .circulos > img {
        height: 100%;
    }

    > .contato {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        text-align: left;
    }

    > .contato > h1 {
        color: #D7B13B;
        font-weight: 100;
        font-size: 5em;
        line-height: 30px;
        font-style: italic;
    }

    > .contato > h2 {
        color: #D9000D;
        font-weight: 300;
        font-size: 3em;
        font-style: italic;
    }

    > .contato > p {
        padding: 10px;
        width: 280px;
    }

    > .contato > div {
        display: flex;
        column-gap: 15px;
        padding: 10px;
    }

    > .contato > div > a {
        width: 50px;
    }

    > .contato > div > a > img {
        width: 100%;
        cursor: pointer;
    }

    > nav {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    > nav > a,
    > nav > a:link,
    > nav > a:active,
    > nav > a:visited {
        text-align: right;
        font-size: 4.5em;
        font-weight: 100;
        text-decoration: none;
        font-style: italic;
        padding-right: 15px;
    }

    > nav > a:hover {
        font-weight: 400;
        border-right: 6px solid #d51b17;
    }
`;
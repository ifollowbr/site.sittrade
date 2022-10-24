import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    background-color: #000000;

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;

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

    @media screen and (max-width: 768px) {
        height: 30px;
    }
`;
import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0 auto;
    }
`

export const Boton = styled.button `
    display:flex;
    align-items: center;
    justify-content: center;
    min-width: 50vw;
    height: 50px;
    cursor: pointer;
`

export const Botones = styled.div `
    display:flex;
    width: 100vw;
`

export const Fondo = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index:1;
    background-color: pink;
`

export const InicioBtn = styled.button `
    width: 150px;
    height: 42px;
    display: flex;
    justify-content: center;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #e9e7e7;
    }
`

export const Historia = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
`

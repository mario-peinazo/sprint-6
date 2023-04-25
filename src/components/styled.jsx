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
`

export const Botones = styled.div `
    display:flex;
    width: 100vw;
`



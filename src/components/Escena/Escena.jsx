import styled from 'styled-components';

const Escena = styled.div `
    height: 50px;
    border: 3px solid black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    margin: 20px;
    background-color: ${({fondo}) => fondo ? 'pink' : 'white'};
`

export default Escena;
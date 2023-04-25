import Escena from "./components/Escena/Escena";
import data from './data';
import {Botones, Boton} from './components/styled';
import {useRef, useState, useEffect} from "react";
import Bienvenida from "./components/Bienvenida/Bienvenida";


function App() {

  const datos = data;

  const [value, setValue] = useState(1)

  const alante = () => {setValue(value < 4 ? value+1 : 1)};
  const atras = () => {setValue(value <= 1 ? 4 : value-1)};

  return (
    <>
      <Bienvenida/>

      <>
        <Botones>
          <Boton onClick={atras}>Anterior</Boton>
          <Boton onClick={alante}>Següent</Boton>
        </Botones>

        {datos.map((object) => 
          <Escena fondo={object.id == value ? true : false}>
            {object.texto}
          </Escena>)}
      </>
   </>
  )
}

export default App;

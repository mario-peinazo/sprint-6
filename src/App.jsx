import Escena from "./components/Escena/Escena";
import datos from './datos';
import {Botones, Boton, Historia} from './components/styled';
import { useState } from "react";
import Bienvenida from "./components/Bienvenida/Bienvenida";


function App() {

  const [value, setValue] = useState(0)

  const alante = () => {setValue(value < 3 ? value+1 : 0)};
  const atras = () => {setValue(value <= 0 ? 3 : value-1)};

  return (
    <>
      <Bienvenida/>

      <Historia background={datos[value].img}>
        <Botones>
          <Boton onClick={atras}>Anterior</Boton>
          <Boton onClick={alante}>Següent</Boton>
        </Botones>

        {datos.map((object, index) => 
          <Escena fondo={index == value ? true : false}>
            {object.texto}
          </Escena>)}

      </Historia>
   </>
  )
}

export default App;

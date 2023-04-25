import { useState } from "react";
import { Fondo, InicioBtn } from "../styled";

export default function Bienvenida() {
  const [popUp, setPopUp] = useState(true);

  const cerrarBienvenida = () => setPopUp(false);

  return (
    <>
    {popUp && (    
        <Fondo>
            <h1>Benvingut/da a la història de l'heroi espacial!</h1>
            <InicioBtn onClick={cerrarBienvenida}>Començar</InicioBtn>
        </Fondo>)}
    </>
  );
}

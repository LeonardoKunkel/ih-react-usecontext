
import { useContext } from "react";
import DogsContext from "../context/dogs/DogsContext";
import HaloContext from "../context/Halo/HaloContext";

export default function Main() {

    const ctxDog = useContext(DogsContext);

    const ctxHalo = useContext(HaloContext);

  return (
    <>
        Área principal.
        <p>{ctxDog.leo}</p>

        <button onClick={ () => { ctxDog.changeName() } }>Cambiar Nombre</button>

        <hr/>
        <p>{ctxHalo.name}</p>
        <p>{ctxHalo.code}</p>
        <p>{ctxHalo.aka}</p>

        <button onClick={() => { ctxHalo.changeCharacter() }}>Cambiar nombre</button>

    </>
  )
}

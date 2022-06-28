import { useContext } from "react"
import valorContext from "./ValorContext";
import Hijo from './Hijo'

export default function Padre(){

    const valor = useContext(valorContext);

    return(
        <>
            <h3> Componente Padre: El valor del context es: { valor }</h3>
            <Hijo />
        </>
    )
}
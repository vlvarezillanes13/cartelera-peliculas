import { useContext } from "react"
import valorContext from "./ValorContext";

export default function Hijo(){

    const valor = useContext(valorContext);

    return(
        <h3> Componente Hijo: El valor del context es: { valor }</h3>
    )
}
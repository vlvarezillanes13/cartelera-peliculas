import { ReactElement } from "react";

export default function ProyectarContenido2( props: proyectarContenido2){

    return(
        <>
            parteSuperior: { props.parteSuperio ?  props.parteSuperio : <h3>Contenido defecto superior</h3>}
            <hr />
            { props.parteIntermedia }
            <hr />
            { props.parteInferior }
        </>
    )

}


interface proyectarContenido2{
    parteSuperio?: ReactElement;
    parteInferior: ReactElement;
    parteIntermedia: ReactElement;
}
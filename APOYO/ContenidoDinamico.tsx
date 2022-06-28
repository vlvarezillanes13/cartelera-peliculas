export default function ContenidoDinamico ( props: any){

            {/* {props.mostrarMensajeSecreto ? <span>Mensaje Secreto: 42</span> : null} */}


        if (props.calificacion > 90) {
            return(
                <div>
                    <h3>{props.nombre} : Excelente calificación</h3>
                </div>
            )
        }else if(props.calificacion >= 80 && props.calificacion <= 90){
            return(
                <div>
                    <h3>{props.nombre} : Bien Hecho</h3>
                </div>
            )
        }else if(props.calificacion > 0 && props.calificacion < 80){
            return(
                <div>
                    <h3>{props.nombre} : LOL</h3>
                </div>
            )
        }else{
            throw `ha habido un error con la calificación de ${props.nombre}`;
        }
}
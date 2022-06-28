import React from 'react'

export default function MostrarTexto (props: MostrarTextoProps) {
    return (
        <div>
            { props.texto }
        </div>
    )
}

interface MostrarTextoProps{
    texto: string;
}

MostrarTexto.defaultProps = {
    texto:'Valor por defecto defaultProps'
}
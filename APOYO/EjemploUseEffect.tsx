import { useEffect, useState } from "react"

export default function EjemploUseEffect(){


    const [clicks, setClicks] = useState(0)
    const [fecha, setFecha ] = useState(new Date())

    useEffect(() => {
        console.log('Componente cargado')

        return () => {
            console.log('Se va destruir componente')
        }
    },[clicks])

    useEffect(() => {
        console.log('Componente cargado 2')
        const intervaloID =  setInterval( () => {
            setFecha( new Date());
        }, 1000)

        return () => {
            clearInterval(intervaloID);
        }
    })

    useEffect(() => {
        console.log('SE EJECUTA 1 VEZ');
    }, [])

    return(
        <>
            <button onClick = { () => setClicks(clicks + 1)} >
                Me has Clickeado { clicks } veces
            </button>

            <div>
                {fecha.toString()}
            </div>
        </>
    )
}
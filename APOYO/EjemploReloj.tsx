import React, { useEffect, useState } from 'react';

export default function EjemploReloj(){
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        const timeId = setInterval(() => {
        setFecha(new Date());
        }, 1000);

        return () =>clearInterval(timeId);
    });

    return(
        <div>
            <h3>Ejemplo React</h3>
            <input type="text" />
            <div>{fecha.toString()}</div>
        </div>
    );
}
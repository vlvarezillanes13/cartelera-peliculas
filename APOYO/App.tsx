import { useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto'
import ProyectarContenido from './ProyectarContenido'
import ContenidoDinamico from './ContenidoDinamico'
import FormularioTexto from './FormularioTexto'
import EjemploUseEffect from './EjemploUseEffect'
import valorContext from './ValorContext'
import Abuelo from './Abuelo'
import ErrorBoundary from './ErrorBoundary'


function App() {

  const [texto, setTexto] = useState(' Texto defeecto useState');
  const [checked, setCheked] = useState(false);

  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number ) => valor * 2;

  const imageURL = "https://mpng.subpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg";


  const manejarKeyUp = (TextoInput: string) => {
    console.log(TextoInput);
    setTexto( TextoInput );
  }
  
  const calificaciones = [
    { nombre: 'Felipe', calificacion: 75},
    { nombre: 'Vicente', calificacion: -1},
    { nombre: 'Valeria', calificacion: 95},
  ];

  return (
    <>
      <h1>Hola Mundo</h1>

      { calificaciones.map( cal =>

        /*<ErrorBoundary key={cal.nombre} errorUi = { <h3>Error Mostrando la calificación </h3>}>
          <ContenidoDinamico {...cal}/>
        </ErrorBoundary>*/

        <ErrorBoundary key={cal.nombre}>
        <ContenidoDinamico {...cal}/>
        </ErrorBoundary>
      )}


      <hr></hr>

      <valorContext.Provider value={ texto } >
        <Abuelo />
      </valorContext.Provider>

      <div>
        <input type="checkbox" name="" id="" 
          onChange={(e) => setCheked(e.currentTarget.checked)}
          checked={checked}
        /> Mostrar Componente UseEffect
      </div>

      {   checked ? <EjemploUseEffect /> : null }

      <br></br>

      {/* <ContenidoDinamico mostrarMensajeSecreto = {true}/> */}

      <br></br>
      <ProyectarContenido>
        <>
          <span>Proyectando Contenido</span>
        </>
      </ProyectarContenido>


      <div className="cuadradoRojo"></div>
      <h3 style={{color:"blue"}}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <button
        onMouseDown={() => console.log("entrando")}
        onClick={() => console.log("click en boton")}
      >
        Clickeame
      </button>

      <img alt="Logo React" src={imageURL} style = {{height:"100px"}}/ >
      <div>
        <input type="checkbox" name="" id="" 
          onChange={(e) => setCheked(e.currentTarget.checked)}
          checked={checked}
        />Este es un Checkbox  
      </div>
      <br></br>
      <div>

        <FormularioTexto manejarKeyUp={ (e: string ) => manejarKeyUp(e)} />

      </div>
      
      <MostrarTexto texto={texto} />
      {/* <MostrarTexto /> */}

    </>
  );
}

export default App;


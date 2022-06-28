import { pelicula } from "./peliculas.model.d";
import css from "./PeliculaIndividual.module.css";

export default function PeliculaIndividual( props:PeliculaIndividualProps ) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`;

    return(
        <div className={css.div}>
            <a href={ construirLink() }>
                <img src={props.pelicula.poster} alt="Poster"/>
            </a>
            <p>
                <a href={ construirLink() }>{props.pelicula.titulo}</a>
            </p>
        </div>
    );
}

interface PeliculaIndividualProps{
    pelicula : pelicula;
}
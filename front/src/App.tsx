import React from 'react';
import logo from './logo.svg';
import './App.css';
import { pelicula } from './Peliculas/peliculas.model.d';
import PeliculaIndividual from './Peliculas/PeliculaIndividual';

function App() {

  const peliculaPrueba: pelicula = {
    id: 1,
    titulo: 'Spider-Man: Far from Home',
    poster : 'https://es.web.img3.acsta.net/pictures/19/06/04/09/41/5108791.jpg'
  }

  return (
    <>
      <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  );
}

export default App;

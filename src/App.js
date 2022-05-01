import React from 'react';
import './App.css';
import Nav from './navigation/Nav'
import MovieList from './components/MovieList'
import AddMovie from './services/AddMovie'
import { MovieProvider } from './services/MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

// Englobamos los componentes con el contexto y los valores, para pasarle la lista de peliculas a todos los componentes.

// Buscar -> rails http status codes (codigos para saber "errores/respuestas" que nos lanzan "ej: 400, 401")
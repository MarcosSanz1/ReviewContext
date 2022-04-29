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

// Hacer apuntes del video https://www.youtube.com/watch?v=35lXWvCuM8o&ab_channel=DevEd

// Buscar en Google -> rails http status codes
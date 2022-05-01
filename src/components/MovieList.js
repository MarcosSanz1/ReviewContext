import React, { useState, useContext } from "react";
import Movie from './Movie'
import { MovieContext } from "../services/MovieContext";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {
                movies.map( movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                ))
            }
        </div>
    )
}

export default MovieList;

// Importamos y usamos el contexto para recoger los valores de las variables "En este caso la lista de peliculas".
// Por último devolvemos la lista con map y le pasamos los datos al componente Movie.
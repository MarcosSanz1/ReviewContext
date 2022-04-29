import React, { useContext } from 'react'
import { MovieContext } from '../services/MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <nav>
            <h3>Inicio</h3>
            <p>List of Movies: {movies.lenght}</p>
        </nav>
    )
}

export default MovieList;
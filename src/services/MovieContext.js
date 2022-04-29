import React, { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$8',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 25661
        },
        {
            name: 'Inception',
            price: '$8',
            id: 28273
        }
    ]);
    return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
}
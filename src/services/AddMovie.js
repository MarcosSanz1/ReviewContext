import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }])
    }

    return(
        <form onSubmit={addMovie}>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={updateName}
            />
            <input 
                type="text" 
                name="price" 
                value={price} 
                onChange={updatePrice}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;

// Importamos y usamos el contexto para recoger los valores de las variables "En este caso la lista de peliculas".
// Creamos dos variables de estado para recoger los valores de los inputs y con el boton meteremos en la lista de peliculas el nombre y precio de la nueva.
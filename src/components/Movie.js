import React from "react";

const Movie = ({name, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie

// Recogemos el nombre y el precio de la pelicula, para luego sacarlas por pantalla.
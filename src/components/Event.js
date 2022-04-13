import React from 'react';

const Event = ({film}) => {

    return(
        <li>
        <img src={film.img} alt="movie-poster"></img>
        <h3>{film.name}</h3>
        <h4>£{film.price}</h4>
        </li>
    )
}

export default Event;
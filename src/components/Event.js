import React from 'react';

const Event = ({event}) => {

    return(
        <li>
        <img src={event.img} alt="movie-poster"></img>
        <h3>{event.name}</h3>
        <h4>£{event.price}</h4>
        </li>
    )
}

export default Event;
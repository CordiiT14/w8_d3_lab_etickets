import React, {useContext} from 'react';
import BasketContext from '../context/BasketContext';

const Event = ({event, index}) => {

    const {basket, setBasket} =useContext(BasketContext)

    const handleAddToBasket = () => {
        const copyBasket = [...basket]
        copyBasket.push(event)
        setBasket(copyBasket);
    }

    return(
        <li key={index}>
        <img src={event.img} alt="movie-poster"></img>
        <h3>{event.name}</h3>
        <h4>£{event.price}</h4>
        <button onClick={handleAddToBasket}>Add to basket</button>
        </li>
    )
}

export default Event;
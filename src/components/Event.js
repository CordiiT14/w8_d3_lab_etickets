import React, {useContext} from 'react';
import BasketContext from '../context/BasketContext';
import styled from 'styled-components';

const Event = ({event, index}) => {

    const {basket, setBasket} =useContext(BasketContext)

    const handleAddToBasket = () => {
        const copyBasket = [...basket]
        copyBasket.push(event)
        setBasket(copyBasket);
    }

    const EventItems = styled.li`
        list-style-type: none;
        margin: 20px;
    `

    return(
        <EventItems key={index}>
        <img src={event.img} alt="movie-poster" width="240px"></img>
        <h3>{event.name}</h3>
        <h4>£{event.price}</h4>
        <button onClick={handleAddToBasket}>Add to basket</button>
        </EventItems>
    )
}

export default Event;
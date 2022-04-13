import React from 'react';
import Event from './Event';
import styled from 'styled-components';

const ListOfEvents = ({listOfEvents}) => {

    const eventNodes = listOfEvents.map((event, index)=> {
        return(
            <Event event={event} index={index}/>
        )
    })

    const AllEvents = styled.div`
    background: #8AB9B5;
    text-align: center;
    `

    const Events = styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;

    `

    return(
        <AllEvents>
            <h2>Upcoming Events</h2>
            <Events>
                {eventNodes}
            </Events>
        </AllEvents>
    )
}

export default ListOfEvents;
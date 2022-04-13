import React from 'react';
import Event from './Event';

const ListOfEvents = ({listOfEvents}) => {

    const eventNodes = listOfEvents.map((event, index)=> {
        return(
            <Event event={event} index={index}/>
        )
    })

    return(
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {eventNodes}
            </ul>
        </div>
    )
}

export default ListOfEvents;
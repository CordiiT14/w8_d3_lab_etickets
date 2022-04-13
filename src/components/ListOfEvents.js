import React from 'react';
import Event from './Event';

const ListOfEvents = ({listOfEvents}) => {

    const eventNodes = listOfEvents.map((film)=> {
        return(
            <Event film={film}/>
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
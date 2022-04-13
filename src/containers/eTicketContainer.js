import React, {useState, useContext} from 'react';
import Modal from 'react-modal';

const eTicketContainter = () => {

    const [ListOfEvents, setListOfEvents] = useState([])
    const [user, setUser] = useState(null);
    const [basket, setBasket] = useState([]);

    return(
        <>
        <modal>

        </modal>   
        <Header />
        <ListOfEvents />
        <BasketContainer />
        </>
    )
}

export default eTicketContainter;
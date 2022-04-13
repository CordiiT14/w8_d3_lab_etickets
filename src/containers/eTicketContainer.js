import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import Header from '../components/Header';
import ListOfEvents from '../components/ListOfEvents';
import BasketContainer from './BasketContainer';
import BasketContext from '../context/BasketContext';

const ETicketContainer = () => {

    const [listOfEvents, setListOfEvents] = useState([
        { name: "The Lost City",
        price: 8,
        img: "https://upload.wikimedia.org/wikipedia/en/e/ee/TheLostCityPoster.jpg"},
        {name: "Sonic the Headgehog 2",
        price: 5,
        img: "https://image.tmdb.org/t/p/w500/4ZGSRZvSxXneaGQydq23M63258M.jpg"},
        {name: "The Batman",
        price: 8,
        img: "https://tse4.mm.bing.net/th?id=OIP.BW1eurFwiC2ctaSCMoAVTwHaKl&pid=Api"}
    ]);
    const [user, setUser] = useState("");
    const [basket, setBasket] = useState([]);

    return(
        <>
        <Modal>

        </Modal>   
        <Header user={user} basket={basket}/>
        <BasketContext.Provider value={{basket, setBasket}}>
        <ListOfEvents listOfEvents={listOfEvents}/>
        <BasketContainer/>
        </BasketContext.Provider>
        </>
    )
}

export default ETicketContainer;
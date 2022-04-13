import React from 'react';

const BasketItems = ({eventItem, index}) => {

    return(
        <div>
            <li key={index}>
                {eventItem.name} | £{eventItem.price}
            </li>

        </div>
    )

}

export default BasketItems;
import React from 'react';

const BasketItems = ({eventItem}) => {

    return(
        <div>
            <li>
                {eventItem.name} | £{eventItem.price}
            </li>

        </div>
    )

}

export default BasketItems;
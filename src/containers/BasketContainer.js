import React, {useState, useEffect} from 'react';
import BasketItems from '../components/BasketItems';


const BasketContainer = ({basket, setBasket}) => {

    const [total, setTotal] = useState(0)

    const basketNodes = basket.map((eventItem) => {
        return <BasketItems eventItem={eventItem}/>
    })

    return(
        <div>
            <h3>Basket</h3>
            <ul>
                {basketNodes}
                <li>
                "The Northman" | £10
                </li>
            </ul>
        </div>
    )

}

export default BasketContainer;
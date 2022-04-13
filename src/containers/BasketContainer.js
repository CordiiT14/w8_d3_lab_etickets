import React, {useState, useContext} from 'react';
import BasketItems from '../components/BasketItems';
import BasketContext from '../context/BasketContext';


const BasketContainer = () => {

    const [total, setTotal] = useState(0)

    const {basket, setBasket} = useContext(BasketContext)

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
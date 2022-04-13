import React, {useState, useContext} from 'react';
import BasketItems from '../components/BasketItems';
import BasketContext from '../context/BasketContext';


const BasketContainer = () => {

    const [total, setTotal] = useState(0)

    const {basket, setBasket} = useContext(BasketContext)

    const basketNodes = basket.map((eventItem, index) => {
        return <BasketItems eventItem={eventItem} index={index}/>
    })

    return(
        <div>
            <h3>Basket</h3>
            <ul>
                {basketNodes}
            </ul>
        </div>
    )

}

export default BasketContainer;
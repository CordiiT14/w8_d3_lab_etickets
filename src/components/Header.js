import React from 'react';

const Header = ({user, basket}) => {

    return(
        <div>
            <h3>Welcome {user}</h3>
            <button>Basket</button>
            <h2>{basket.length}</h2>
        </div>
    );
}

export default Header;
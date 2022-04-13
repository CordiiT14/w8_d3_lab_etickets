import React from 'react';
import styled from 'styled-components';

const Header = ({user, basket}) => {

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background: #2B4141;
    color: #C8C2AE;
`

 const Title = styled.h1`
    margin: 20px;
 `

 const Basket = styled.div`
    padding: 20px;
    font-size: 15px;
 `

    return(
        <Header>
            <Title id="welcome">Welcome {user}</Title>
            <Basket>
            <button>Basket: {basket.length}</button>
            </Basket>
        </Header>
    );
}

export default Header;
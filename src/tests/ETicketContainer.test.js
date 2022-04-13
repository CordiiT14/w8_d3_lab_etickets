import ETicketContainer from "../containers/eTicketContainer";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';

describe("ETicketContainer", () => {

    configure({adapter: new Adapter()});

    let container;
    beforeEach(()=> {
        container = shallow(<ETicketContainer/>)
    });

    it('should render <ReactModal/>' , () => {
        
    });

})
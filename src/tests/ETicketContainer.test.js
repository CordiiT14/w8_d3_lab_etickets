import ETicketContainer from "../containers/eTicketContainer";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';
import ReactModal from 'react-modal';

describe("ETicketContainer", () => {

    configure({adapter: new Adapter()});

    let container;
    beforeEach(()=> {
        container = shallow(<ETicketContainer/>)
    });

    it('Modal should render' , () => {
        expect(container.find(ReactModal)).toHaveLength(1);
    });

    it('Modal prop isOpen is true', () => {
        expect(container.find(ReactModal).prop('isOpen')).toBe(true);
    });

    it('Modal prop should change on button click', () => {
        expect(container.find(ReactModal).prop('isOpen')).toBe(true);
        container.find('button').simulate('click');
        expect(container.find(ReactModal).prop('isOpen')).toBe(false);
    });

})
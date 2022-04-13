import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import Header from '../components/Header';

describe("Header" ,() => {

    configure({adapter: new Adapter()});

    let container;
    beforeEach(()=> {
        container = shallow(<Header />);
    });

    xit('Should have Title', () => {
        expect(container.find('h1')).toBe(`Welcome ${user}`)
    })

})
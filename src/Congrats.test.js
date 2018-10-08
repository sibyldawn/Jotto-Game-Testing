import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
} 



test('renders without error',() => {

});

test('renders no text when `success` prop is false',() => {

});

test('renders no-empty congrats when `success` prop is true',() => {

});
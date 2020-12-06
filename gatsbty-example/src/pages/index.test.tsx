import React from 'react';
import {shallow} from 'enzyme';

import Index from './index';

describe('index', () => {
    describe('basic', () => {
        it('should be not null', () => {
            const wrapper = shallow(<Index/>);
            expect(wrapper).not.toBe(null);
        });
    })
});

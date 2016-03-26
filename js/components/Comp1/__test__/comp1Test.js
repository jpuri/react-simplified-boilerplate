import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Comp1 from '../index';

describe('Comp1 test suite', () => {
  it('contains the rendered text', () => {
    expect(shallow(<Comp1 />).contains('Comp-1')).to.equal(true);
  });
});

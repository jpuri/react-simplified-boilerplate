import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Comp2 from '../index';

describe('Comp2 test suite', () => {
  it('contains the rendered text', () => {
    expect(shallow(<Comp2 />).contains('Comp-2')).to.equal(true);
  });
});

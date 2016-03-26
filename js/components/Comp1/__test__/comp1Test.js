import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Comp1 from '../index';

describe("Comp1 test suite", function() {
  it("contains the rendered text", () => {
    expect(shallow(<Comp1 />).contains('Comp-1')).to.equal(true);
  });
});

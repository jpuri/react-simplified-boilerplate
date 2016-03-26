import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../index';

describe('App test suite', () => {
  it('contains the passed child element', () => {
    expect(shallow(<App><div /></App>).contains(<div />)).to.equal(true);
  });
});

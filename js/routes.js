/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    Comp1,
    Comp2,
} from './components';

const routes = (
  <Route path="/" component={App}>
    <Route path="comp1" component={Comp1} />
    <Route path="comp2" component={Comp2} />
    <IndexRoute component={Comp1} />
  </Route>
);

module.exports = routes;

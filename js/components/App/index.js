/* @flow */

import React from 'react';

// Component with props and validation
const App = (props: any) => <div>{ props.children }</div>;

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;

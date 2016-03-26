import React from 'react';

// Component with props and validation
const Comp2 = (props) => <div>{ props.children }</div>;

Comp2.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Comp2;

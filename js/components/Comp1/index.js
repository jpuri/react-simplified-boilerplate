/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';

// This is stateful component
export default class Comp1 extends Component {

  state: any = {
    status: false,
  };

  changeState: any = () => {
    const status = !this.state.status;
    this.setState({
      status,
    });
  };

  render() {
    return (
      <div className={ styles.root }>
        <div>Comp-1, State: { this.state.status.toString() }</div>
        <button onClick={ this.changeState }>Change state</button>
      </div>
    );
  }
}

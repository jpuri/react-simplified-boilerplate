import React, { Component } from 'react';
import styles from './styles.css';

export default class Comp1 extends Component {
  render() {
    console.log('styles', styles);

    return (
      <div className={ styles.root }>Comp-1</div>
    );
  }
};

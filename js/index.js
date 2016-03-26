import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

ReactDOM.render(<Router routes={ routes } history={ browserHistory }/>,
  document.getElementById('app'));

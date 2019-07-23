import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from './Welcome';

ReactDOM.render(
  <Welcome name='yongyan'/>,
  document.getElementById('root')
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import caterouter from './router/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(caterouter, document.getElementById('root'));

serviceWorker.unregister();

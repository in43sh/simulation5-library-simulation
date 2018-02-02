import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'; // competency 42D
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root'));
// registerServiceWorker();

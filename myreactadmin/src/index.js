import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import WrappedNormalLoginForm from './comm/Login/Login.js';
import Webpage from './comm/web/webpage';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Webpage />
  </Router>
  ,
   document.getElementById('root'));
registerServiceWorker();

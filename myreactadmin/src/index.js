import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WrappedNormalLoginForm from './comm/Login/Login.js'
import Addcontent from './comm/Consultation/addContent.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <WrappedNormalLoginForm />
  </Router>
  ,
   document.getElementById('root'));
registerServiceWorker();

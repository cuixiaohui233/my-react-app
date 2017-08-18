import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';import App from '../../App';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch

} from 'react-router-dom';
import './error.css';

class Error extends Component {
  render(){
    return(
      <div className="error">
        <div className="error_tishi">
          请输入用户名和密码
          <Link to="/"><button>确定</button></Link>
        </div>
      </div>
    )
  }
}
export default Error;

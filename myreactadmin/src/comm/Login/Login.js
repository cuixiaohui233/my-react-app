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
import './Login.css';
import Error from '../Consultation/error'
const FormItem = Form.Item;



class NormalLoginForm extends Component {
  constructor(){
    super();
    this.state={
      val:'',
      val1:''
    }
  }
  change1 = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  change2 = (ev)=>{
    this.setState({
      val1:ev.target.value
    })
  }
  render() {
    let login = null;
    if(this.state.val && this.state.val1){
      login = <Link to="/app"><button>登录</button></Link>
    }else{
      login = <Link to="/error"><button>登录</button></Link>
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="login-form">
        用户名：<input
          type="type"
          value={this.state.val}
          onChange={this.change1}
        /><br />
        密码：<input
          type="password"
          onChange={this.change2}
          value={this.state.val1}/>
        登录：{login}
      </form>
      <Switch>
        <Route  path="/app" render = {()=>{
          return <App power={this.state.val}/>
        }} />
        <Route  path="/error" render = {()=>{
          return <Error />
        }} />
    </Switch>
    </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

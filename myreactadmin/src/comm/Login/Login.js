import React,{Component} from 'react';
import { Form, Icon } from 'antd';import App from '../../App';
import {
  Route,
  Link,
  Switch

} from 'react-router-dom';
import './Login.css';
import Error from '../Consultation/error'
// const FormItem = Form.Item;



class NormalLoginForm extends Component {
  constructor(){
    super();
    this.state={
      val:'',
      val1:'',
      class:'login-form'
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
  click = ()=>{
    this.setState({
      class:'form_none login-form'
    })
  }
  render() {
    let login = null;
    if(this.state.val && this.state.val1){
      login = <Link to="/app"><button
        onClick={this.click}
        >登录</button></Link>
    }else{
      login = <Link to="/error"><button>登录</button></Link>
    }
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <form onSubmit={this.handleSubmit} className={this.state.class}>
        <p>
          <span><Icon type="user" style={{ fontSize: 18 }} /> :</span>
          <input
          type="type"
          value={this.state.val}
          onChange={this.change1}
          placeholder="请输入用户名"
        />
        </p>
        <p>
          <span><Icon type="lock"  style={{ fontSize: 18 }} /> :</span>
          <input
          type="password"
          onChange={this.change2}
          value={this.state.val1}
          placeholder="请输入密码"
        />
        </p>
        {login}
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

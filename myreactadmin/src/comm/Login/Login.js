import React,{Component} from 'react';
import { Form, Icon } from 'antd';import App from '../../App';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import './Login.css';
import Error from '../Consultation/error';
import Add from '../add/add';
// const FormItem = Form.Item;



class NormalLoginForm extends Component {
  constructor(){
    super();
    this.state={
      val:'',
      val1:'',
      class:'login-form',
      arr:[
        {
        id:1,
        username:'aaa',
        password:'aaa',
        bool:true,
        states:'admin',
        sex:'女',
        phone:'12312312334',
        email:'',
        address:'',
        checked:false,
      }
      ]
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
  // click = ()=>{
  //   this.setState({
  //     class:'form_none login-form'
  //   })
  // }
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
      <Link to="/add">
        <button
          className="add"
          onClick={this.click}
          >立即注册
        </button>
      </Link>
      </form>
      <Switch>
        <Route  path="/app" render = {()=>{
        let arr2 = JSON.parse(localStorage.getItem('users')) || this.state.arr;
        let arr = arr2.find(e=>e.username === this.state.val);
        // console.log(arr,this.state.val1);
          if(arr2.find(e=>e.username === this.state.val)){
            // console.log(arr.password,this.state.val1);
            if(arr.password+'' === this.state.val1){
              if(arr.bool){
                  return <App power={arr.states}/>
              }
            }else{
              alert('密码错误');
              return <Redirect to="/" />
            }
          }else{
            alert('对不起没有此用户');
            return <Redirect to="/" />
          }
        }} />
        <Route  path="/error" render = {()=>{
          return <Error />
        }} />
        <Route  path="/add" render = {()=>{
          return <Add />
        }} />
    </Switch>
    </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

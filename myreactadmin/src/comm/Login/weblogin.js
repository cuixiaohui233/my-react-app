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
import Webpage from '../web/homepage';
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
  click = ()=>{
    if(this.state.val && this.state.val1){
      let arr2 = JSON.parse(localStorage.getItem('users')) || this.state.arr;
      let arr = arr2.find(e=>e.username === this.state.val);
      // console.log(arr,this.state.val1);
        if(arr2.find(e=>e.username === this.state.val)){
          // console.log(arr.password,this.state.val1);
          if(arr.password+'' === this.state.val1){
            if(arr.bool){
              console.log(arr.states);
                this.props.changeRoute('true',arr.states);
            }
          }else{
            alert('密码错误');
          }
        }else{
          alert('对不起没有此用户');
        }
    }else{
      alert('请输入密码！');
    }

  }
  render() {
    return (
      <div>
        <Webpage />
        <div id="mask"></div>
      <form onSubmit={this.handleSubmit} className={this.state.class}>
        <h1 className="welcome">欢迎来到微奇生活</h1>
        <Link to="/"><span className="quxiao"><Icon type="close" /></span></Link>
        <p>
          <span><Icon type="user" style={{ fontSize: 18 }} /> :</span>
          <input
          type="type"
          value={this.state.val}
          onChange={this.change1}
          placeholder="请输入用户名"
        />
        </p>
        <p id="del_bott">
          <span><Icon type="lock"  style={{ fontSize: 18 }} /> :</span>
          <input
          type="password"
          onChange={this.change2}
          value={this.state.val1}
          placeholder="请输入密码"
        />
        </p>
        <p id="add_list">
        <Link to='/add'>注册会员</Link>
        <Link to='/addmin' className="addAdmin">注册超级会员</Link></p>
        <Link to="/app">
        <button
          onClick={this.click}
          >登录
        </button>
        </Link>
      {/* <Link to="/add">
        <button
          className="add"
          >立即注册
        </button>
      </Link> */}

      </form>
    </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

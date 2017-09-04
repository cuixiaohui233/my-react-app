import React,{Component} from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Icon } from 'antd';import App from '../../App';
import Webpage from '../web/homepage';
class Add extends Component{
  constructor(){
    super();
    this.state = {
      arr:[],
      name:'',
      pass:'',
      sex:'',
      phone:'',
      email:'',
      address:'',
      checked:false,
      bool:false,
      states:'',
      userType:null,
      collect:[],
      score:[],
      comment:[]
    }
  }
  componentDidMount(){
    this.setState({
      arr:getItem('users')
    });
  }
  //用户名受控
  changename = (ev)=>{
    this.setState({
      name:ev.target.value
    })
  }
  //密码受控
  changepass = (ev)=>{
    this.setState({
      pass:ev.target.value
    })
  }
  //性别受控
  changesex = (ev)=>{
    this.setState({
      sex:ev.target.value
    })
  }
  //电话受控
  changephone = (ev)=>{
    this.setState({
      phone:ev.target.value
    })
  }
  //地址受控
  changeaddress = (ev)=>{
    this.setState({
      address:ev.target.value
    })
  }
  //邮箱受控
  changeemail = (ev)=>{
    this.setState({
      email:ev.target.value
    })
  }
  //最大id
  maxId = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    let num = 0;
    arr1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  add = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    let arr2 = getItem('users');
    // console.log(arr2);
    if(this.state.name && this.state.pass){
      if(arr2.find(e => e.username === this.state.name)){
        alert('换个名字吧！');
        this.props.changeRoute('add','member');
      }else{
        for(var i=0;i<arr1.length;i++){
          if(arr1[i].userType){
            arr1[i].userType = null;
          }
        }
        console.log(arr1);
        arr1.push({
          username:this.state.name,
          password:this.state.pass,
          sex:this.state.sex,
          phone:this.state.phone,
          email:this.state.email,
          address:this.state.address,
          checked:false,
          bool:true,
          states:'member',
          userType:this.state.name,
          collect:[],
          score:[],
          comment:[]
        });
        localStorage.setItem('users',JSON.stringify(arr1));
        this.props.changeRoute('true','member');
      }
    }else {
      alert('请填写信息')
      this.props.changeRoute('add','');
    }
  }
  render(){
    // console.log(this.props.changeRoute);
    return(
      <div>
      <Webpage />
      <div id="mask"></div>
      <from className="login-form login_form3" id="login_form2">
        <h1 className="welcome1">注册新用户</h1>
        <Link to="/"><span className="quxiao"><Icon type="close" /></span></Link>
        <p className="title_short" >
          <span>用户名：</span>
          <input
            type="text"
            onChange={this.changename}
            value={this.state.name}
          />
        </p>
        <p className="title_short" >
          <span>密码：</span>
          <input
            type="password"
            onChange={this.changepass}
            value={this.state.pass}
          />
        </p>
        <Link to="/app">
        <button
          onClick = {this.add}
          id="add"
          >注册会员
        </button>
        </Link>
      </from>
    </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [
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
      userType:null,
      collect:[],
      score:[],
      comment:[]
  }]
}
export default Add;

import React,{Component} from 'react';

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
      states:'admin'
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
    console.log(arr2);
    if(arr2.find(e => e.username === this.state.name)){
      alert('换个名字吧！');
    }else{
      arr1.push({
          username:this.state.name,
          password:this.state.pass,
          sex:this.state.sex,
          phone:this.state.phone,
          email:this.state.email,
          address:this.state.address,
          checked:false,
          bool:true,
          states:'member'});
      localStorage.setItem('users',JSON.stringify(arr1));
    }
  }
  addadmin = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    let arr2 = getItem('users');
    console.log(arr2);
    if(arr2.find(e => e.username === this.state.name)){
      alert('换个名字吧！');
    }else{
      arr1.push({
        username:this.state.name,
        password:this.state.pass,
        sex:this.state.sex,
        phone:this.state.phone,
        email:this.state.email,
        address:this.state.address,
        checked:false,
        bool:true,
        states:'admin'});
      localStorage.setItem('users',JSON.stringify(arr1));
    }
  }
  render(){
    return(
      <div>
      <Webpage />
      <div id="mask"></div>
      <from className="login-form">
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
        <p className="title_short" >
          <span>性别：</span>
          <input
            type="text"
            onChange={this.changesex}
            value={this.state.sex}
          />
        </p>
        {/* <p className="title_short" >
          <span>联系电话：</span>
          <input
            type="text"
            onChange={this.changephone}
            value={this.state.phone}
          />
        </p>
        <p className="title_short" >
          <span>电子邮件：</span>
          <input
            type="text"
            onChange={this.changeemail}
            value={this.state.email}
          />
        </p>
        <p className="title_short" >
          <span>地址：</span>
          <input
            type="text"
            onChange={this.changeaddress}
            value={this.state.address}
          />
        </p> */}
        <button
          onClick = {this.add}
          className=""
          >注册会员
        </button>
        <button
          onClick = {this.addadmin}
          >注册管理员
        </button>
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
  }]
}
export default Add;

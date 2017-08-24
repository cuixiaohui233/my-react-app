import React,{Component} from 'react';

class Add extends Component{
  constructor(){
    super();
    this.state = {
      arr:[
        {username:'admin',password:'asdfgh'}
      ],
      name:'',
      pass:''
    }
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
  add = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    arr1.push({username:this.state.name,password:this.state.pass});
    localStorage.setItem('users',arr);
  }
  render(){
    return(
      <from>
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
            onChange={this.change}
            value={this.state.pass}
          />
        </p>
        <p className="title_short" >
          <span>确认密码：</span>
          <input
            type="password"
            onChange={this.change}
          />
        </p>
        <button
          onClick = {this.add}
          >注册</button>
      </from>
    )
  }
}
export default Add;

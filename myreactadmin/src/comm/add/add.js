import React,{Component} from 'react';

class Add extends Component{
  change = ()=>{

  }
  render(){
    return(
      <from>
        <p className="title_short" >
          <span>用户名：</span>
          <input
            type="text"
            onChange={this.change}
          />
        </p>
        <p className="title_short" >
          <span>密码：</span>
          <input
            type="password"
            onChange={this.change}
          />
        </p>
        <p className="title_short" >
          <span>确认密码：</span>
          <input
            type="password"
            onChange={this.change}
          />
        </p>
        <button>注册</button>
      </from>
    )
  }
}
export default Add;

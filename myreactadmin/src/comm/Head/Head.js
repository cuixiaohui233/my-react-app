import React,{Component} from "react";
import './head.css';
class Header extends Component {
  render(){
    return (
      <div id="head">
        <h3 id="head_logo">Wqsh.admin <span>v3.0</span></h3>
        <div id="head_user"><span>超级管理员</span></div>
      </div>
    )
  }
}
export default Header;

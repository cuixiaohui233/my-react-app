import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Addcontent from './addContent';
class DelandAdd extends Component{
  constructor(){
    super();
    this.state= {
      item:false
    }
  }
  // add = ()=>{
  //   // alert(1)
  //   this.setState= {
  //     item:true
  //   }
  // }
  render(){
  // console.log(this.state)
    return (
      <div className="DelandAdd">
        <button className="first_child"><Icon type="delete" />  批量删除</button>
        <button
          className="last_child"
          onClick= {this.add}
          ><Icon type="edit" /> <Link to="/image"> 添加咨询</Link></button>
          <Route path="/image" component={Addcontent}/>
      </div>
    )
  }
}
export default DelandAdd;

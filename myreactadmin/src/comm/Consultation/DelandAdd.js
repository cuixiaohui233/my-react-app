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
  // console.log(this.props.addText)
    return (
      <div className="DelandAdd">
        <button className="first_child"><Icon type="delete" />  批量删除</button>
         <Link to="/image"><button
          className="last_child"
          onClick= {this.add}
          ><Icon type="edit" /> 添加咨询</button></Link>

          <switch>
            <Route path="/image" render={()=>{
              return <Addcontent addText ={this.props.addText} maxId={this.props.maxId} />
            }}/>
          </switch>
      </div>
    )
  }
}
export default DelandAdd;

import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';
import {BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Addcontent from './addContent';


class DelandAdd extends Component{
  constructor(){
    super();
    this.state= {
      item:false
    }
  }
  render(){
  // console.log(this.props.addText)
  // console.log(1111);
    return (
      <Router>
      <div className="DelandAdd">
        <button className="first_child"><Icon type="delete" />  批量删除</button>
        <Link to="/addcontent">
          <button className="last_child"><Icon type="edit" />添加咨询</button>
        </Link>
        <Switch>
          <Route path="/addcontent" component={Addcontent} />
        </Switch>
      </div>
    </Router>
    )
  }
}
export default DelandAdd;

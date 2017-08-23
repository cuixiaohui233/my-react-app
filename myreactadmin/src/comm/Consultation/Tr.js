import React,{Component} from 'react';
import Changecontent from './changeval';
import {BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';

class Tr extends Component{
  constructor(){
    super();
    this.state= {
      val:''
    }
  }
  //点击删除数据
  delVal = () => {
    // alert(1);
    this.props.delete(this.props.id);
  }
  //受控表单
  change = (ev) =>{
    this.props.change(this.props.id)
  }
  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    let data = {
      id:this.props.id,
      item:this.props.item,
      标题:this.props.标题,
      作者:this.props.作者,
      更新时间:this.props.更新时间,
      内容:this.props.内容,
      发布状态:this.props.发布状态,
      动作:this.props.动作,
      checked:this.props.checked,
      changedata:this.props.changedata,
    }
    let h = null;
    if(this.props.动作){
      h = <td><a href="javascript:;"
        onClick = {this.click1}
      >{this.props.动作}</a><span>
        <Link to="/changeval">修改</Link></span>
      <a href="javascript:;"
        onClick = {this.delVal}
        >删除
      </a>
      <Switch>
        <Route path="/changeval" render={()=>{
          return <Changecontent {...data}/>
        }}/>
      </Switch>
    </td>
    }
    let item = this.props.内容.slice(0, 4)+'...';
    let title = this.props.标题.slice(0,4)+'...';
    let writer = this.props.作者.slice(0,3)+'...';
    return(
      <Router>
        <tr>
          <td
            className = "changeitem"
            ><input
            type="type"
            onChange={this.changeitem}
           /></td>
          <td><input
            type="checkbox"
            checked={this.props.checked}
            onChange = {this.change}
           /></td>
          <td>{this.props.id}</td>
          <td title={this.props.标题}>{title}</td>
          <td>{this.props.item}</td>
          <td>{this.props.更新时间}</td>
          <td title={this.props.作者}>{writer}</td>
          <td title={this.props.内容}>{item}</td>
          <td>{this.props.发布状态}</td>
          {h}
        </tr>
      </Router>
    )
  }
}
export default Tr

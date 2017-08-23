import React,{Component} from 'react';
import './changeval.css';
import { Icon,Button, notification }from 'antd';
// import Consult from './Consult';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
// import Nologin from './no_login';

class Changecontent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:this.props.标题,
      textarea:this.props.内容,
      changewriter:this.props.作者,
      bool:false
    }
  }
  change = (ev)=>{
    this.setState({
      title:ev.target.value
    })
  }
  changeTextarea = (ev)=>{
    this.setState({
      textarea:ev.target.value
    })
  }
  changewriter = (ev)=>{
    this.setState({
      changewriter:ev.target.value
    })
  }
  changeVal = ()=>{
    let {title,changewriter} = this.state;
    if(title  && changewriter){
      this.props.changedata({
        标题:title,
        作者:changewriter,
      });
    }
    this.setState({
      bool:true
    })
  }
  render(){
    return(
      <div className="addContent">
          <from>
            <p className="title_short" ><span><i>*</i>文章标题：</span><input
              type="text"
              onChange={this.change}
              value={this.state.title}
            /></p>
            <p className="text_short">
              <input
                type="file"
                name="file"
                ref = {(elem)=>{this.file = elem}}
              />
              <input
                type="button"
                value="按钮"
                id="btn"
                onClick={this.uplode}
              />
            </p>
            <p className="title_short"><span><i>*</i>图片名称：</span><input
              type="text"
              onChange={this.changewriter}
              value={this.state.changewriter}
            />
          </p>
          </from>
        <span className="off"><Link to="/image"><Icon type="close" /></Link></span>
        <p className="button_short">
          <Link to="/image">
            <button
              className="button1"
              onClick = {this.changeVal}
              >保存修改
            </button>
          </Link>
          <Link to="/image">
            <button className="button3">取消</button>
          </Link>
        </p>
      </div>
    )
  }
}
export default Changecontent;

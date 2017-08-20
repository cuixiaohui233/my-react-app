import React,{Component} from 'react';
import './addContent.css';
import { Icon }from 'antd';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
// import Nologin from './no_login';

class Addcontent extends Component{
  constructor(){
    super();
    this.state = {
      title:'',
      changewriter:'',
      summary:'',
      bool:false
    }
  }
  change = (ev)=>{
    this.setState({
      title:ev.target.value
    })
  }
  changewriter = (ev)=>{
    this.setState({
      changewriter:ev.target.value
    })
  }
  summary = (ev)=>{
    this.setState({
      summary:ev.target.value
    })
  }
  //保存并发布
  submin = () =>{
    let {title,changewriter} = this.state;
    let url = this.file.value;
    if(title && url && changewriter){
      this.props.addText({
        id:this.props.maxId(),
        标题:title,
        封面:url,
        图片名称:changewriter,
        发布状态:'已发布',
        动作:'下架',
        更新时间:this.props.changeTime()
      });
    }
    this.setState({
      bool:true
    })
  }
  //保存草稿
  draft = () =>{
    let {title,changewriter} = this.state;
    let url = require(this.file.value);
    if(title && url && changewriter){
      this.props.addText({
        id:this.props.maxId(),
        分类:this.classify.value,
        标题:title,
        发布状态:'草稿',
        动作:'审核',
        更新时间:this.props.changeTime()
      });
    }
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
        <span className="off"><Link to="/"><Icon type="close" /></Link></span>
        <p className="button_short">
          <Link to="/content">
            <button
              className="button1"
              onClick = {this.submin}
              >保存并提交
            </button>
          </Link>
          <Link to="/content">
            <button
              className="button2"
              onClick = {this.draft}
              >保存草稿
            </button>
          </Link>
          <button className="button3">取消</button>
        </p>
      </div>
    )
  }
}
export default Addcontent;

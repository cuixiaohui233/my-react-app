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
      bool:false,
      imgsrc:'',
      info:''
    }
  }
  change = (ev)=>{
    this.setState({
      title:ev.target.value
    })
  }
  changewriter = (ev)=>{
    this.setState({
      info:ev.target.value
    })
  }
  summary = (ev)=>{
    this.setState({
      summary:ev.target.value
    })
  }

imgChange = ()=>{
  var oFReader = new FileReader();
  var file = this.file.files[0];
  oFReader.readAsDataURL(file);
  oFReader.onloadend = (oFRevent)=>{
    this.setState({
      imgsrc:oFRevent.target.result
    })
  }

}
  //保存并发布
  submin = () =>{
    let {title,imgsrc,info} = this.state;
    if(title &&info){
      this.props.addText({
        id:this.props.maxId(),
        标题:title,
        封面:imgsrc,
        info:info,
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
    let {title,imgsrc,info} = this.state;
    if(title &&info){
      this.props.addText({
        id:this.props.maxId(),
        标题:title,
        封面:imgsrc,
        info:info,
        发布状态:'草稿',
        动作:'下架',
        更新时间:this.props.changeTime()
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
            <p className="title_short" ><span><i>*</i>相册标题：</span><input
              type="text"
              onChange={this.change}
              value={this.state.title}
            /></p>
            <p className="text_short">
              <span><i>*</i>相册封面：</span>
              <input
                type="file"
                name="file"
                onChange={this.imgChange}
                ref = {(elem)=>{this.file = elem}}
              />
            </p>
            <p className="title_short"><span><i>*</i>相册描述：</span><input
                type="text"
                onChange={this.changewriter}
                value={this.state.info}
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

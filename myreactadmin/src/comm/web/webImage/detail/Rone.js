import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Rate } from 'antd';
import $ from 'jquery';
// import './read_item.css';

class Rtwo extends Component{
  constructor(props){
    super(props);
    this.state = {
      info:[],
      title:'',
      name:'',
      img:'',
      time:'',
      url:this.props.url
    }
  }
  componentDidMount(){
    let that = this;
    let data = JSON.parse(localStorage.getItem('img'));
    let data1 = Object.assign(data);
    data1 = data1.find((e)=>e.id == this.state.url);
    console.log(data1);
    that.setState({
      title:data1.标题,
      name:data1.title,
      img:data1.头像,
      info:data1.img,
      time:data1.更新时间
    })
  }
  render(){
    let {info} = this.state;
      console.log(info);
    let pinfo1 = Object.assign(info);
    let list = null;
    if(pinfo1.length){
      list = pinfo1.map((e,i)=>{
        return <div className="webpage_img_info">
                <img src={e} id="layout"/>
               </div>
      })
    }
    return(
      <div id="redhhh">
        <div className="webpage_read item_read">
        <h1 className="item_h1">{this.state.title}</h1>
          <div id="webpage_image_img_span">
            <img src={this.state.img} />
            <span>{this.state.name}</span>
            <span>{this.state.time}</span>
          </div>
        </div>
        <div id="actic_img">
          {list}
        </div>
      </div>
    )
  }
}



export default Rtwo;

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
      data:[],
      title:'',
      name:'',
      img:'',
      time:'',
      url:this.props.url
    }
  }
  componentDidMount(){
    let that = this;
    let data = JSON.parse(localStorage.getItem('image')) || JSON.parse(localStorage.getItem('img'));
    let data1 = Object.assign(data);
    data1 = data1.find((e)=>e.id == this.state.url);
    if(data1.type){
      // this.setState({
      //   title:data1.标题,
      //   name:data1.作者,
      //   // img:data.
      // })
    }else{
      $.ajax({
        // url:'https://api.douban.com/v2/album/118763016/photos',
        url:'https://api.douban.com/v2/album/'+this.state.url+'/photos?callback',
        type:'post',
        dataType:'jsonp',
        data:{
          scope: 'community_basic_photo',
          count:20
        },
        success:function(data){
          console.log(data);
          that.setState({
            title:data.album.title,
            name:data.album.author.name,
            img:data.album.author.avatar,
            data:data.photos,
            time:data.album.updated
          })
        }
      })
    }
  }
  render(){
    let {data} = this.state;
    let pinfo1 = Object.assign(data);
    let list = null;
    list = pinfo1.map((e,i)=>{
      return <div className="webpage_img_info">
              <img src={e.thumb} id="layout"/>
             </div>
    })
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

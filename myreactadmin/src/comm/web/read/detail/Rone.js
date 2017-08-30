import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Rate } from 'antd';
import $ from 'jquery';
import './read_item.css';

class Rone extends Component{
  constructor(){
    super();
    this.state = {
      data:[],
      title:'',
      name:'',
      img:'',
      pinfo:[],
      val:''
    }
  }
  componentDidMount(){
    let that = this;
    $.ajax({
      url:'https://api.douban.com/v2/note/633196260',
      data:{
        format:'html_full'
      },
      dataType:'jsonp',
      success:function(data){
        // console.log(data);
        that.setState({
          data:data,
          title:data.title,
          name:data.author.name,
          img:data.author.avatar
        })
      }
    })
    that.setState({
      pinfo:getItem('diss1')
    })

  }
  componentDidUpdate() {
    // if(this.state.data)
      document.getElementById("actic").innerHTML = this.state.data.content;
  }

  changeTextarea = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  //最大id
  maxId = ()=>{
    let {pinfo} = this.state;
    let data1 = Object.assign(pinfo);
    let num = 0;
    data1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  click = ()=>{
    let {pinfo} = this.state;
    let arr1 = Object.assign(pinfo);
    if(this.state.val){
      let data = {
        author:{avatar:'https://img1.doubanio.com/icon/user_normal.jpg',name:'佚名'},
        created:2017-8-30,
        content:this.state.val,
        id:this.maxId()
      }
      arr1.unshift(data);
      this.setState({
        pinfo:arr1,
        val:''
      })
    }
  }
  render(){
    // console.log(this.state.pinfo)
    let {pinfo} = this.state;
    let pinfo1 = Object.assign(pinfo);
    let list = null;
    // console.log(this.state.data);
    if(pinfo1.length){
      list = pinfo1.map((e,i)=>{
        return <div id="pact">
          <div className="pimg"><img src={e.author.avatar} /></div>
          <div className="pitem">
            <p className="p_item"><span>{e.created}</span><span><a href={e.author.alt}>{e.author.name}</a></span></p>
            <p className="p_act">{e.content}</p>
            <p className="p_icon">来自微奇生活</p>
          </div>
        </div>
      })
      pinfo.sort(function(a,b){
        return a.id-b.id;
      })
      // console.log(pinfo);
      localStorage.setItem('diss1',JSON.stringify(pinfo))
    }
    // console.log(list);
    return(
      <div>
        <div id="redhhh">
          <div className="webpage_read item_read">
          <h1 className="item_h1">{this.state.title}</h1>
            <div><img src={this.state.img} /><span>{this.state.name}</span></div>
          </div>
          <div id="actic"></div>
        </div>
        <div id="banquan">
          <span>本文版权归 魏小河 所有，任何形式转载请联系作者。</span><br/>
          <span>了解版权计划</span>
        </div>
        <div id="pinglun">
          <div>
            <div className="pingfen"><p className="read_react_star read_react">评分</p><Rate className="read_star" /></div>
            <div  className="pingfen"><p className="read_react">回应</p></div>
            <textarea
              name=""
              cols="95"
              rows="5"
              className="read_textarea"
              placeholder="说点什么...最少输入10个字符"
              datatype="*10-100"
              onChange={this.changeTextarea}
              value={this.state.val}
              >
               </textarea>
               <input
                 type="button"
                 value="发表评论"
                 onClick={this.click}
               />
            {list}
          </div>
        </div>
      </div>
    )
  }
}
function getItem(data){
  let pitem = [];
  $.ajax({
    url:'https://api.douban.com/v2/note/633196260/comments',
    dataType:'jsonp',
    success:function(data){
      // console.log(data);
      pitem = data.comments;
    }
  })
  // console.log(pitem)
  return JSON.parse(localStorage.getItem(data)) || pitem
}
export default Rone;

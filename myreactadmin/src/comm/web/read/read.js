import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import './read.css';
class Read extends Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props.stateBool);
    let data = JSON.parse(localStorage.getItem('article'));
    // console.log(data);
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      return <Link to={'/web/read/'+e.id}><div className="webpage_read">
        <p className="web_read_img_span"><img src={e.avatar} /><span className="authorname">{e.作者}</span></p>
        <span id="read_title" >{e.标题}</span>
        <p className="read_title_p">{e.内容}</p>
      </div></Link>
    })
    return(
      <div id="webpage_read">
        <h1 className="today">今日精选</h1>
        {list}
      </div>
    )
  }
}
export default Read;

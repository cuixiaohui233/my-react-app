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
    let data = JSON.parse(localStorage.getItem('article'));
    // console.log(data);
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      return <div className="webpage_read">
        <p><img src={e.avatar} /><span>{e.authorname}</span></p>
        <Link to={'/web/read/'+e.id} className="read_title" >{e.title}</Link>
        <p>{e.summary}</p>
      </div>
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

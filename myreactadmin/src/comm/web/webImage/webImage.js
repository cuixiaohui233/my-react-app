import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import './webImage.css';
class WebImage extends Component{
  constructor(){
    super();
  }
  render(){
  let data = JSON.parse(localStorage.getItem('image')) || JSON.parse(localStorage.getItem('img'));
    // console.log(data);
    let data1 = Object.assign(data);
    let list = null;
    let img1 = null;
    list = data1.map((e,i)=>{
      // console.log(e.img)
      return <Link to={'/web/webimage/'+e.id}><div className="webpage_read1">
        <p className="webpage_image"><img src={e.头像} id="touxiang" /><span id="biaoti">{e.title}-{e.标题}</span></p>
        <p className="webpage_image1">
          <img className="img_little" src={e.img[0]} />
          <img className="img_little" src={e.img[1]} />
          <img className="img_little" src={e.img[2]} />
        </p>
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
export default WebImage;

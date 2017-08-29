import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Homepage from './homepage';
import Read from './read/read';
import WebImage from './webImage/webImage';
import Rone from './read/detail/Rone';

let logo  = require('./img/logo.gif');


const Child = ({match})=>{
  console.log(match.params.url)
  let arr = [
    {'633196260':<Rone />},
  ]
  let r = arr.find((e)=>e[match.params.url]);
  console.log(r[match.params.url])
  return (r[match.params.url]);
}
class Webpage extends Component{
  constructor(){
    super();
    this.state = {
      id:0
    }
  }
  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
  }
  render(){
    return(
      <div>
        <nav>
          <div className="nav">
            <div id="web_logo">
              <Link to="/"><img src={logo} className="logo_img"/></Link>
              <input type="text" className="logo_input"/>
            </div>
            <div id="web_item">
              <p className="web_span">
                <span><Link to="/web/read" className="article">文章</Link></span>
                <span><Link to="/web/image" className="image">图集</Link></span>
                <span><Link to="/" className="market">市集</Link></span>
                <span><Link to="/" className="movie">电影</Link></span>
                <span><Link to="/" className="muise">音乐</Link></span>
              </p>
            </div>
          </div>
        </nav>
        <Route exact path="/" render={()=>{
          return <Homepage />
        }} />
        <Route exact path="/web/read" render={()=>{
          return <Read />
        }} />
        <Route path="/web/image" render={()=>{
          return <WebImage />
        }} />
        <Route exact path="/web/read/:url" component={Child} />
      </div>
    )
  }
}
export default Webpage;

import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Homepage from './homepage';
import Read from './read/read';
import WebImage from './webImage/webImage';
import Rone from './read/detail/Rone';
import Rtwo from './read/detail/Rtwo';
import Rthree from './read/detail/Rthree';
import Rfour from './read/detail/Rfour';
import Rfive from './read/detail/Rfive';
import Rsix from './read/detail/Rsix';
import App from '../../App';
import WrappedNormalLoginForm from '../Login/weblogin';
import Add from '../add/add';
import Addadmin from '../add/addadmin';
let logo  = require('./img/logo.gif');


const Child = ({match})=>{
  // console.log(match.params.url)
  let arr = [
    {'633196260':<Rone />},
    {'633649108':<Rtwo />},
    {'634206154':<Rthree />},
    {'633311053':<Rfour />},
    {'633311053':<Rfive />},
    {'633528924':<Rsix />},
    {'633196260':<Rone />},
  ]
  let r = arr.find((e)=>e[match.params.url]);
  // console.log(r[match.params.url])
  return (r[match.params.url]);
}
class Webpage extends Component{
  constructor(){
    super();
    this.state = {
      stateBool:'false',
      states:''
    }
  }
  componentDidMount(){
    // let data = JSON.parse(localStorage.getItem('data'));
    // console.log(data);
  }
  changeRoute = (newbool,newstate) =>{
    // if(typeof newstate == )
    console.log(newbool,newstate)
    this.setState({
      stateBool:newbool,
      states:newstate
    })
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
                <span><Link to="/app" className="movie">管理</Link></span>
                {/* <span><Link to="/" className="movie">电影</Link></span>
                <span><Link to="/" className="muise">音乐</Link></span> */}
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
        <Route path="/app" render={()=>{
          if(this.state.stateBool == 'true'){
            return <App power={this.state.states} />
          }else if(this.state.stateBool == 'false'){
            // alert('请先登录！')
            return <Redirect to="/login" />
          }else if(this.state.stateBool == 'add'){
            return <Redirect to="/add" />
          }else if(this.state.stateBool == 'addmin'){
            return <Redirect to="/addmin" />
          }
        }} />
        <Route path="/login" render = {()=>{
          return <WrappedNormalLoginForm changeRoute={this.changeRoute} />
        }}/>
        <Route exact path="/web/read/:url" component={Child} />
        <Route  path="/add" render = {()=>{
          return <Add changeRoute = {this.changeRoute} />
        }} />
        <Route  path="/addmin" render = {()=>{
          return <Addadmin changeRoute = {this.changeRoute} />
        }} />
      </div>
    )
  }
}
export default Webpage;

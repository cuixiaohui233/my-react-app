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
import Rtwo from './webImage/detail/Rone';
import App from '../../App';
import WrappedNormalLoginForm from '../Login/weblogin';
import Add from '../add/add';
import Addadmin from '../add/addadmin';
let logo  = require('./img/logo.gif');


const Child = ({match})=>{
  // console.log(match.params.url)
  return (<Rone url={match.params.url}/>);
}
const Child2 = ({match})=>{
  // console.log(match.params.url)
  return (<Rtwo url={match.params.url}/>);
}
const Child3 = ({match})=>{
  // console.log(match.params.url)

  return (<Rone url={match.params.url}/>);
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
    // console.log(newbool,newstate)
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
              <Link to="/home"><img src={logo} className="logo_img"/></Link>
              <input type="text" className="logo_input"/>
            </div>
            <div id="web_item">
              <p className="web_span">
                <span><Link to="/web/read" className="article">文章</Link></span>
                <span><Link to="/web/image" className="image">图集</Link></span>
                <span><Link to="/" className="market">市集</Link></span>
                <span><Link to="/app/content" className="movie">管理</Link></span>
                {/* <span><Link to="/" className="movie">电影</Link></span>
                <span><Link to="/" className="muise">音乐</Link></span> */}
              </p>
            </div>
          </div>
        </nav>
        <Switch>
        <Route exact path="/home" render={()=>{
          return <Homepage changeRoute={this.changeRoute} />
        }} />
        <Route exact path="/web/read" render={()=>{
          return <Read />
        }} />
        <Route path="/web/image" render={()=>{
          return <WebImage />
        }} />
        <Route path="/app/content" render={()=>{
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
        <Route exact path="/web/webimage/:url" component={Child2} />
        <Route exact path="/homeimage/:url" component={Child3} />
        <Route  path="/addmin" render = {()=>{
          return <Addadmin changeRoute = {this.changeRoute} />
        }} />
        <Route path="/" render={()=>{
          return <Homepage changeRoute={this.changeRoute} />
        }} />
      </Switch>
      </div>
    )
  }
}
export default Webpage;

import React,{Component} from 'react';
import {
  Route,
  Link,
  Switch

} from 'react-router-dom';

class LoginForm extends Component {
  render(){
    return(
      <Switch>
        <Route  path="/app" render = {()=>{
          return <App power={this.state.val}/>
        }} />
        <Route  path="/error" render = {()=>{
          return <Error />
        }} />
        <Route  path="/add" render = {()=>{
          return <Add />
        }} />
    </Switch>
    )
  }
}
export default LoginForm;

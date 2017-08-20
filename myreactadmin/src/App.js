import React, { Component } from 'react';
import Menu1 from './comm/side/Menu1';
import Header from './comm/Head/Head';
import Nav from './comm/navigation/nav';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom';
import './App.css';
//咨询管理
import Consult from './comm/Consultation/Consult';

//图片管理
import Image  from './comm/image/Image';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <Menu1 />
          <Nav />
          <Switch>
            <Route path="/image" render={()=>{
              return <Image />
            }} />
            <Route path="/content" render={()=>{
              return <Consult power={this.props.power} />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

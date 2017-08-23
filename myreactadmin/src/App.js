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

//品牌管理
import Brand from './comm/brand/brand';

//品牌管理
import Product from './comm/product/product';

//评论管理
import Discuss from './comm/discuss/discuss';

//折线图
import EchartsTest from './comm/echarts/lineChart/line';

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
              return <Image power={this.props.power}/>
            }} />
            <Route path="/content" render={()=>{
              return <Consult power={this.props.power} />
            }} />
            <Route path="/brand" render={()=>{
              return <Brand power={this.props.power} />
            }} />
            <Route path="/product" render={()=>{
              return <Product power={this.props.power} />
            }} />
            <Route path="/discuss" render={()=>{
              return <Discuss power={this.props.power} />
            }} />
            <Route path="/linechart" render={()=>{
              return <EchartsTest power={this.props.power} />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

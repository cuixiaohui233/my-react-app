import React, { Component } from 'react';
import Menu1 from './comm/side/Menu1';
import Header from './comm/Head/Head';
import Nav from './comm/navigation/nav';


//咨询管理
import Consult from './comm/Consultation/Consult';

//图片管理
// import Image  from './comm/image/Image';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <Menu1 />
        <Nav />
        <Consult />
      </div>
    );
  }
}

export default App;

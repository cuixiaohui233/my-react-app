import React,{Component} from 'react';
import { Pagination } from 'antd';
import './page.css';
class Page extends Component{
  render(){
    return (
      <div className="page_parent">
        <span>显示1-2条 共2条</span><Pagination defaultCurrent={1} total={50} />
      </div>
    )
  }
}
export default Page;

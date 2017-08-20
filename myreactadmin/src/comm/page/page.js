import React,{Component} from 'react';
import { Pagination } from 'antd';
import './page.css';
class Page extends Component{
  render(){
    let page = Math.ceil(this.props.data.length/5)*10
      console.log(page);
    return (
      <div className="page_parent">
        <span>显示1-2条 共2条</span><Pagination defaultCurrent={0} total={page} />
      </div>
    )
  }
}
export default Page;

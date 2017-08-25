import React,{Component} from 'react';
import './suredel.css';

class Aeryousure extends Component{
  sure =(ev)=>{
    console.log(ev.target.id)
    this.props.shanchu(ev.target.id)
  }
  render(){
    // console.log(this.props.hhh)
    return (
      <div className={this.props.hhh} id="aeryousure">
        <p>你确定要删除吗？</p>
        <button
          onClick={this.sure}
          id="sure"
          >确定</button>
        <button
        id="false"
        onClick={this.sure}
        >取消</button>
      </div>
    )
  }
}
export default Aeryousure

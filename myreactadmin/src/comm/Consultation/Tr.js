import React,{Component} from 'react';
class Tr extends Component{
  constructor(){
    super();
    this.state= {
      val:''
    }
  }
  //点击删除数据
  delVal = () => {
    // alert(1);
    this.props.delete(this.props.id);
  }
  //受控表单
  change = (ev) =>{
    this.props.change(this.props.id)
  }
  //修改内容
  changeitem = () =>{

  }
  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    let h = null;
    if(this.props.动作){
      h = <td><a href="javascript:;"
        onClick = {this.click1}
      >{this.props.动作}</a><a href="javascript:;"
        onClick = {this.changeVal}
      >修改</a>
      <a href="javascript:;"
        onClick = {this.delVal}
        >删除
      </a>
    </td>
    }
    let item = this.props.内容.slice(0, 4)+'...';
    let title = this.props.标题.slice(0,4)+'...';
    let writer = this.props.作者.slice(0,3)+'...';
    return(
        <tr>
          <td
            className = "changeitem"
            ><input
            type="type"
            onChange={this.changeitem}

           /></td>
          <td><input
            type="checkbox"
            checked={this.props.checked}
            onChange = {this.change}
           /></td>
          <td>{this.props.id}</td>
          <td title={this.props.标题}>{title}</td>
          <td>{this.props.item}</td>
          <td>{this.props.更新时间}</td>
          <td title={this.props.作者}>{writer}</td>
          <td title={this.props.内容}>{item}</td>
          <td>{this.props.发布状态}</td>
          {h}
        </tr>
    )
  }
}
export default Tr

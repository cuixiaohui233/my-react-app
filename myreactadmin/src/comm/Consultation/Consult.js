import React,{Component} from 'react';
import PickerSizesDemo from '../Data/Date';
import Tr from './Tr';
import './table.css';
import DelandAdd from './DelandAdd';
import Page from '../page/page';
class Consult extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','分类','标题','更新时间','浏览次数','发布状态','操作'],
      data:[{
        id:1,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'草稿',
        动作:'审核',
        checked:false
      },{
        id:2,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'已发布',
        动作:'下架',
        checked:false
      }, {
        id:3,
        分类:'行业行情',
        标题:'咨询标题',
        更新时间:'2017-8-13',
        浏览次数:'11234',
        发布状态:'草稿',
        动作:'审核',
        checked:true
      }]
    }
  }
  delete = (newID)=>{
    // console.log(newID)
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = data1.filter((e,i)=>{
      return e.id != newID;
    });
    // console.log(list);
    this.setState({
      data:list
    })
  }
  //受控表单
  change = (newId)=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newId){
        e.checked = !e.checked;
      }
    })
    // console.log(data1)
    this.setState({
      data:data1
    })
  }
  //添加数据
  addText= (newTxt) =>{
    // console.log(newTxt)
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.push(newTxt);
    this.setState({
      data:data1
    })
    // console.log(this.maxId())
  }
  //最大id
  maxId = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let num = 0;
    data1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      let data = {
        id:e.id,
        item:e.分类,
        标题:e.标题,
        更新时间:e.更新时间,
        浏览次数:e.浏览次数,
        发布状态:e.发布状态,
        动作:e.动作,
        key:i+new Date,
        checked:e.checked,
        delete:this.delete,
        change:this.change
      }
      return <Tr {...data} title={title}/>
    });
    // let {title} = this.props.data;
    let title1 = Object.assign(title);
    let item = null;
    item = title1.map((e,i)=>{
      let data = {
        key:i
      }
      return <th {...data}>{e}</th>
    })
    return (
      <div>
        <PickerSizesDemo />
        <DelandAdd addText = {this.addText} maxId={this.maxId} />
        <table>
          <thead>
            <tr>
              {item}
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        <Page />
      </div>
    )
  }
}
export default Consult;

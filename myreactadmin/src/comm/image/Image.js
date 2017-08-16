import React,{Component} from 'react';
import PickerSizesDemo from '../Data/Date';
import DelandAdd from './DelandAdd';
import Tr from '../image/Tr';
import '../table/table.css';
import Page from '../page/page';

class Image extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','分类','封面','图片名称','Tags','更新时间','发布状态','操作'],
      data:[{
        id:1,
        分类:'行业行情',
        封面:'咨询标题',
        图片名称:'现代简约 白色 餐厅',
        Tags:'标签',
        更新时间:'2017-8-15',
        发布状态:'审核',
        操作:'jj',
        动作:'已发布',
        checked:false
      }]
    }
  }
  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.map((e,i)=>{
      let data = {
        id:e.id,
        分类:e.分类,
        封面:e.封面,
        图片名称:e.图片名称,
        Tags:e.Tags,
        更新时间:e.更新时间,
        发布状态:e.发布状态,
        动作:e.动作,
        操作:e.操作,
        key:i+new Date,
        checked:e.checked
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
    return(
      <div>
        <PickerSizesDemo />
        <DelandAdd />
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
export default Image;

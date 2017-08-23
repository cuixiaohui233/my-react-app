import React,{Component} from 'react';
import PickerSizesDemo2 from '../Data/Datebrand';
import DelandAdd from './DelandAdd';
import Tr from './Tr';
import '../table/table.css';
import Page from '../page/page';
import { Button, notification } from 'antd'

let img1 = require('../img/img1.jpg');
let img2 = require('../img/img2.gif');
let img3 = require('../img/img3.jpg');
let img4 = require('../img/img4.png');
const openNotificationWithIcon1 = (type) => {
  // console.log(type);
    notification[type]({
      message: '删除成功',
      description: '成功删除数据',
    });
  };
  const openNotificationWithIcon2 = (type) => {
    // console.log(type);
      notification[type]({
        message: '修改成功',
        description: '成功修改数据',
      });
    };
class Brand extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','品牌名称','LOGO','具体描述','更新时间','发布状态','操作'],
      data:[],
      power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
      ],
      view:'all',
      info:[],
      page:1
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('brand')
    });
  }
  delete = (newID)=>{
    // console.log(newID)
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = data1.filter((e,i)=>{
      return e.id !== newID;
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
    console.log(newTxt)
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
  //更新时间
  changeTime = ()=>{
    let date = new Date();
    let date1 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    return date1;
  }
  //批量删除
  alldel = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.filter((e,i)=>!e.checked);
    console.log(data1);
    this.setState({
      data:list
    })
  }
  //检索
  changeView = (newView,id)=>{
    // console.log(newView,id);
    if(id === 'search'){
      this.setState({
        view:'search',
        info:newView
      })
    }else {
      this.setState({
        view:'all',
        info:this.state.data
      })
    }
  }
  //页码切换
  changepage = (newpage)=>{
    this.setState({
      page:newpage
    })
  }
  //修改数据
  changedata = (newData)=>{
    // console.log(newData);
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      e.分类 = newData.分类
      e.标题 = newData.标题
      e.作者 = newData.作者
      e.内容 = newData.内容
    })
    console.log(data1);
    this.setState({
      data:data1
    })
    openNotificationWithIcon2('success');
  }
  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    let item = null;
    let addanddel = null;
    let filterview = null;
    switch (this.state.view) {
      case 'search':
        filterview = this.state.info
        break;
      case 'all':
        filterview = this.state.data
        break;
    }
    if(this.props.power === 'admin'){
      if(filterview.length){
        list = filterview.map((e,i)=>{
          let data = {
            id:e.id,
            标题:e.标题,
            封面:e.封面,
            图片名称:e.图片名称,
            Tags:e.Tags,
            更新时间:e.更新时间,
            发布状态:e.发布状态,
            动作:e.动作,
            操作:e.操作,
            key:i+new Date,
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        localStorage.setItem('brand',JSON.stringify(data));
      }

      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
        changeTime:this.changeTime,
        alldel:this.alldel
      }
      addanddel = <DelandAdd {...shuju}/>;

      // let {title} = this.props.data;
      let title1 = Object.assign(title);
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })
    }else{
      let title1 = Object.assign(title);
      title1.map((e,i)=>{
        if(e === '操作'){
          title1.splice(i,1);
        }
      })
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })
      list = filterview.map((e,i)=>{
        let data = {
          id:e.id,
          标题:e.标题,
          封面:e.封面,
          图片名称:e.图片名称,
          更新时间:e.更新时间,
          发布状态:e.发布状态,
          操作:e.操作,
          key:i+new Date,
          checked:e.checked,
          delete:this.delete,
          change:this.change
        }
        if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
          return <Tr {...data} title={title}/>
        }
      });
    }

    return(
      <div>
        <PickerSizesDemo2
          changeView={this.changeView}
          view={this.state.view}
          data={this.state.data}
         />
        {addanddel}
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
        <Page
          data={this.state.data}
          changepage={this.changepage}
        />
      </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{
    id:1,
    标题:'东鹏特饮',
    封面:img1,
    图片名称:'超级好喝',
    更新时间:'2017-8-15',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  },{
    id:2,
    标题:'酸梅汤',
    封面:img3,
    图片名称:'超级好喝',
    更新时间:'2017-8-15',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  }]
}
export default Brand;

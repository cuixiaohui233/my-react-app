import React,{Component} from 'react';
import PickerSizesDemo from '../Data/Date';
// import { Alert } from 'antd';
import { Button, notification } from 'antd'
import Tr from './Tr';
import './table.css';
import DelandAdd from './DelandAdd';
import Page from '../page/page';
import './consult.css'

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
class Consult extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','标题','分类','更新时间','作者','内容','发布状态','操作'],
      data:[],
      power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
      ],
      view:'all',
      info:[],
      page:1,
      // class:'active_none'
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('data')
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
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.push(newTxt);
    this.setState({
      data:data1,
      // class:'alert_del'
    })
  }
  //修改数据
  changedata = (newData)=>{
    // console.log(newData);
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newData.id){
        e.分类 = newData.分类
        e.标题 = newData.标题
        e.作者 = newData.作者
        e.内容 = newData.内容
      }      
    })
    console.log(data1);
    this.setState({
      data:data1
    })
    openNotificationWithIcon2('success');
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
    this.setState({
      data:list
    })
    openNotificationWithIcon1('success')
  }
  //检索
  changeView = (newView,id)=>{
    // console.log(newView,id);
    if(id === 'search' || id==='keyup'){
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
  //改变页码
  changepage = (newpage)=>{
    console.log(newpage);
    this.setState({
      page:newpage
    })
  }

  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    let title1 = Object.assign(title);
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
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })

      if(filterview.length){
        list = filterview.map((e,i)=>{
          let data = {
            id:e.id,
            item:e.分类,
            标题:e.标题,
            作者:e.作者,
            更新时间:e.更新时间,
            内容:e.内容,
            发布状态:e.发布状态,
            动作:e.动作,
            key:(i+new Date),
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        localStorage.setItem('data',JSON.stringify(data));
      }
      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
        changeTime:this.changeTime,
        alldel:this.alldel,
      }
      addanddel = <DelandAdd {...shuju}/>;
    }else{
      // let title2 = Object.assign(title);
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
          item:e.分类,
          标题:e.标题,
          作者:e.作者,
          更新时间:e.更新时间,
          内容:e.内容,
          发布状态:e.发布状态,
          动作:'',
          key:i+new Date,
          checked:e.checked,
          delete:this.delete,
          change:this.change
        }
        if(i>(this.state.page-1)*5-1 && i<=this.state.page*5-1){
          return <Tr {...data} title={title}/>
        }
      });
      // addanddel = <div>欢迎光临</div>
    }
    // <Alert message="Success Tips" type="success" showIcon className={this.state.class}/>

    return (
      <div className="consult">
      <PickerSizesDemo
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
    分类:'行业行情',
    标题:'咨询标题',
    作者:'王泽慧',
    更新时间:'2017-8-13',
    内容:'哈哈哈哈',
    发布状态:'草稿',
    动作:'审核',
    checked:false
  }]
}
export default Consult;

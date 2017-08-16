import React,{Component} from 'react';
import  { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './side.css'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Menu1 extends Component{
  render(){
    return(
      <div>
        <Menu className="side-div" mode="vertical">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>咨询管理</span></span>}>
            <Menu.Item key="1">咨询管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>图片管理</span></span>}>
            <Menu.Item key="2">图片管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="desktop" /><span>产品管理</span></span>}>
            <Menu.Item key="3">品牌管理</Menu.Item>
            <Menu.Item key="4">分类管理</Menu.Item>
            <Menu.Item key="5">产品管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="notification" /><span>评论管理</span></span>}>
            <Menu.Item key="6">评论列表</Menu.Item>
            <Menu.Item key="7">意见反馈</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="usergroup-add" /><span>会员管理</span></span>}>
            <Menu.Item key="8">会员列表</Menu.Item>
            <Menu.Item key="9">删除的会员</Menu.Item>
            <Menu.Item key="10">等级管理</Menu.Item>
            <Menu.Item key="11">积分管理</Menu.Item>
            <Menu.Item key="12">浏览记录</Menu.Item>
            <Menu.Item key="13">下载记录</Menu.Item>
            <Menu.Item key="14">分享记录</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="user" /><span>管理员管理</span></span>}>
            <Menu.Item key="15">角色管理</Menu.Item>
            <Menu.Item key="16">权限管理</Menu.Item>
            <Menu.Item key="17">管理员列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title={<span><Icon type="hdd" /><span>系统统计</span></span>}>
            <Menu.Item key="18">折线图</Menu.Item>
            <Menu.Item key="19">时间轴折线图</Menu.Item>
            <Menu.Item key="20">区域图</Menu.Item>
            <Menu.Item key="21">柱状图</Menu.Item>
            <Menu.Item key="22">饼状图</Menu.Item>
            <Menu.Item key="23">3D柱状图</Menu.Item>
            <Menu.Item key="24">3D饼状图</Menu.Item>
          </SubMenu>
          <SubMenu key="sub8" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="25">系统设置</Menu.Item>
            <Menu.Item key="26">栏目管理</Menu.Item>
            <Menu.Item key="27">数据字典</Menu.Item>
            <Menu.Item key="28">屏蔽词</Menu.Item>
            <Menu.Item key="29">系统日志</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default Menu1

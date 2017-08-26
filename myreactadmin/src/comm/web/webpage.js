import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import $ from 'jquery';
import './webpage.css';
let logo  = require('./img/logo.gif');
let banner  = require('./img/banner.gif');
let rabbit = require('./img/p1430226140.webp');
let img1 = require('./img/p1609665408.webp');
let img2 = require('./img/p2083796393.webp');
let img3 = require('./img/p2363487310.webp');
let img4 = require('./img/p2497237678.webp');
let img5 = require('./img/p2495578250.webp');

class Webpage extends Component{
  constructor(){
    super();
    this.state = {
      hot:[],
      article:[{
          title:'为什么《圆桌派》的观众老骂蒋方舟？',
          author:'',
          id:633196260
        },{
          title:'独自在家',
          id:633649108
        },{
          title:'当我逛书展不买书时我还能做些什么',
          id:634206154
        },{
          title:'艺术又终结了吗？',
          id:633311053
        },{
          title:'终于，和林家栋谈了谈电影、表演和金像奖影帝',
          id:633528924
        },{
          title:'新品种草&经典回顾丨谁能不爱哑光口红',
          id:634021319
        },{
          title:'青梅竹马这件小事',
          id:634104356
        },{
          title:'今 敏先生去世的第七年，回忆他曾经的自叙',
          id:634483634
        },{
          title:'希望还是虚妄？十字路口的国产动画电影',
          id:634444806
        },{
          title:'7位女摄影师拍同一对姑娘',
          id:634529429
        },{
          title:'这支香，仿佛收集了整个夏天的阳光',
          id:634074646
        }],
      img:[{
        title:'追想',
        id:1650813162,
        img:img5
      },{
        title:'也',
        id:1650417319,
        img:img4
      },{
       title:'我的心情，你能体会吗？',
       id:65512298,
       img:rabbit
     },{
        title:'▁▂▃色 • 彩○○●',
        id:109319721,
        img:img2
       }//,{
        //   title:'乱马1/2',
        //   id:1623545509,
        //   img:img3
        // },{
      //   title:'大白兔',
      //   id:73998172,
      //   img:img1
      // }
    ],
      margit:[],
    }
  }
  componentDidMount(){
    let {article} = this.state;
    let article1 = Object.assign(article);
    article1.map((e,i)=>{
      $.ajax({
        url:'https://api.douban.com/v2/note/'+e.id,
        dataType:'jsonp',
        success:function(data){
          console.log(data);
          // this.setState({
          //
          // })
        }
      })
    })
  }
  render(){
    let {img,article} = this.state;
    let img1 = Object.assign(img);
    let image = null;
    let article1 = Object.assign(article);
    let art = null;
    image = img1.map((e,i)=>{
      let data = {
        img:e.img,
        txt:e.title,
        key:i
      }
      return <dl className="img_dl"><dt><span className="img_span"><img src={data.img} /></span></dt><dd><Link to="/">{data.txt}</Link></dd></dl>
    })
    art = article1.map((e,i)=>{
      return <li><Link to="/">{e.title}</Link></li>
    })
    return(
      <div className="webpage">
        <nav>
          <div className="nav">
            <div id="web_logo">
              <img src={logo} className="logo_img"/>
              <input type="text" className="logo_input"/>
            </div>
            <div id="web_item">
              <p className="web_span">
                <span><Link to="/" className="article">文章</Link></span>
                <span><Link to="/" className="image">图集</Link></span>
                <span><Link to="/" className="market">市集</Link></span>
                <span><Link to="/" className="movie">电影</Link></span>
                <span><Link to="/" className="muise">音乐</Link></span>
              </p>
            </div>
          </div>
        </nav>
        <div id="web_banner">
          <img src={banner} className="banner_img" />
        </div>
        <div id="advert">
          <a href="https://erebor.douban.com/redirect/?ad=188411&uid=&bid=7qezcFiVg98&unit=dale_anonymous_home_page_middle_2&crtr=3%3A%2F&mark=&hn=hador15&sig=195d8fea5a0bb1593a9f148af49a7a979dc44c4838597db68f4156b03db7be5b5e138753e5db5cc768c84627871a00eebde70ace6324b23f852733ac2807c50c&pid=debug_a51700db43644dfab6c4b68ae301d319106066f8&target=aHR0cHM6Ly9zaGlqaS5kb3ViYW4uY29tL3NwZWNpYWwvcWl4aQ==">
            <img src="https://img1.doubanio.com/view/dale-online/dale_ad/public/3b6c8a1c4e50839.jpg"/>
          </a>
        </div>
        <div id="word">
          <h3 className="hot_item">热点内容</h3>
          <div id="img_dl">
            {image}
          </div>
          <div id="img_ul">
            <ul className="img_ul">
            {art}
          </ul>
          </div>
        </div>
        <div id="article">
          <h3 className="hot_item hot_item_add">文章</h3>
          <div id="hot_article">
            <h3><span className="hot_art">热门文章</span><Link to="/">更多</Link></h3>
          </div>
        </div>
        <div id="image">
          <h3 className="hot_item hot_item_add">图集</h3>
          <div id="hot_image">
            <h3><span className="hot_art">热门相册</span><Link to="/">更多</Link></h3>
          </div>
        </div>
        <div id="margit">
          <h3 className="hot_item hot_item_add">市集</h3>
          <div id="hot_margit">
            <h3><span className="hot_art">热门商品</span><Link to="/">更多</Link></h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Webpage;

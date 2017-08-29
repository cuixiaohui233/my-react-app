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
// let rabbit = require('./img/p1430226140.webp');
let img1 = require('./img/1.webp');
let img2 = require('./img/2.webp');
let img3 = require('./img/3.webp');
let img4 = require('./img/4.webp');
let img5 = require('./img/5.webp');
let img6 = require('./img/6.webp');
let img7 = require('./img/7.webp');
let img8 = require('./img/8.webp');
// let img5 = require('./img/p2495578250.webp');

class Homepage extends Component{
  constructor(){
    super();
    this.state = {
      hot:[],
      article:[],
      arr:[],
      img:[],
      market:[],
    }
  }
  componentDidMount(){
    this.setState({
      article:getItem('article'),
      img:getItem('img'),
      market:getItem('market')
    });
  }
  artClick = (ev)=>{
    console.log(ev.target.id)
    $.ajax({
      url:'https://api.douban.com/v2/note/'+ev.target.id,
      // url:'https://api.douban.com/v2/note/user_created/51610855',
      dataType:'jsonp',
      success:function(data){
        console.log(data);
        // arr1.push(data);
      }
    })
  }
  render(){
    let {img,article,market} = this.state;
    let img1 = Object.assign(img);
    let image = null;
    let image1 = null;
    // console.log(article)
    let article1 = Object.assign(article);
    let art = null;
    let art1 = null;
    let market1 = Object.assign(market);
    let supermarket = null;
    if(article.length){
      localStorage.setItem('article',JSON.stringify(article));
    }
    if(img.length){
      localStorage.setItem('img',JSON.stringify(img));
    }
    if(market.length){
      localStorage.setItem('market',JSON.stringify(market));
    }
    image = img1.map((e,i)=>{
      let data = {
        img:e.img,
        txt:e.title,
        key:i
      }
      if(i <= 3){
        return <dl className="img_dl">
                <dt>
                  <span className="img_span">
                  <Link to="/"><img src={data.img} /></Link>
                  </span>
                </dt>
                <dd>
                  <Link to={'/image/'+data.id}>{data.txt}</Link>
                </dd>
              </dl>
      }
    })
    image1 = img1.map((e,i)=>{
      let data = {
        img:e.img,
        txt:e.title,
        id:e.id,
        key:i
      }
      return <dl className="img_dl">
              <dt>
                <span className="img_span">
                <Link to="/"><img src={data.img} /></Link>
                </span>
              </dt>
              <dd>
                <Link to={'/image/'+data.id}>{data.txt}</Link>
              </dd>
            </dl>
    })
    art = article1.map((e,i)=>{
      return <li
        onClick={this.artClick}
        ><Link to="/" id = {e.id}>{e.title}</Link></li>
    })
    art1 = article1.map((e,i)=>{
      if(i<=4){
        return <div id="author">
          <div className="art_author"><img src={e.avatar} className="art_img"/><span>{e.authorname}</span></div>
          <div className="art_item">
            <p>{e.title}</p>
            <p className="art_txt">{e.summary}</p>
          </div>
        </div>
      }
    })
    supermarket = market1.map((e,i)=>{
      return  <div className="grid-item">
                <div className="product-item" data-id="90190">
                  <div className="p-img">
                    <a href={e.href} target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      <img className="market_img" src={e.img} />
                    </a>
                  </div>
                  <div className="p-title">
                    <a href="https://market.douban.com/item/90190/?r=5&amp;index=6&amp;category=index" target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）
                    </a>
                  </div>
                  <div className="p-brand">
                    <a href="https://market.douban.com/shop/miniteaset/" target="_blank">小巨蛋市集</a>
                  </div>
                  <div className="p-price">
                    <del className="price">736.00</del>
                    <i className="price">368.00</i>
                  </div>
                </div>
              </div>
    })
    return(
      <Router>
      <div className="webpage">
        <div id="web_banner">
          <img src={banner} className="banner_img" />
          <from id="webfrom">
            <input type="text" />
            <input type="password" />
          </from>
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
            <div className="hot_article_item">{art1}</div>
          </div>
        </div>
        <div id="image">
          <h3 className="hot_item hot_item_add">图集</h3>
          <div id="hot_image">
            <h3><span className="hot_art">热门相册</span><Link to="/">更多</Link></h3>
            <div className="img_item">{image1}</div>
          </div>
        </div>
        <div id="margit">
          <h3 className="hot_item hot_item_add">市集</h3>
          <div id="hot_margit">
            <h3><span className="hot_art">热门商品</span><Link to="/">更多</Link></h3>
            <div>{supermarket}</div>
          </div>
        </div>
      </div>
    </Router>
    )
  }
}
function getItem(data){
  let arr = JSON.parse(localStorage.getItem('data'));
  // console.log(arr);
  // let arr1 = Object.assign(arr);
  let list = null;
  list = arr.map((e,i)=>{
    let hhh = {
      title:e.标题,
      authorname:e.作者,
      avatar:e.avatar,
      update_time:e.更新时间,
      summary:e.内容,
      id:e.id
    }
    return hhh;
  })
  // console.log(list);

  let arr1 = JSON.parse(localStorage.getItem('image'));
  let list1 = null;
  list1 = arr1.map((e,i)=>{
    // console.log(e.封面)
    ///static/media/1.63910e0d.webp
    ///static/media/1.63910e0d.webp
    let hhh = {
      title:e.标题,
      id:e.id,
      img:e.封面
    }
    return hhh;
  })

  let arr2 = JSON.parse(localStorage.getItem('product'));
  let list2 = null;
  list2 = arr2.map((e,i)=>{
    // console.log(e,href)
    let hhh = {
      title:e.标题,
      id:e.id,
      img:e.封面,
      href:e.href
    }
    return hhh;
  })

  if(data === 'article'){
    localStorage.removeItem('article');
     return JSON.parse(localStorage.getItem('article')) || list;
  }else if(data === 'img'){
    localStorage.removeItem('img');
    return JSON.parse(localStorage.getItem('img')) || list1 || [
      {
        title:'没有青海湖和茶卡的青海',
        id:1651058003,
        img:img1
      },{
        title:'「人们」',
        id:1638051845,
        img:img2
      },{
       title:'湿湿的梦',
       id:1651158281,
       img:img3
      },{
        title:'即时乐树',
        id:1647018236,
        img:img4
      },{
        title:'在商业社会做个堂堂正正的废物会死吗？',
        id:1651117401,
        img:img5
      },{
        title:'萨尔兹卡默古特',
        id:1649846355,
        img:img6
      },{
        title:'夏天去香港看海',
        id:1650648598,
        img:img7
      },{
        title:'北京红冶钢厂',
        id:1651038482,
        img:img8
      }
    ]
  }else if(data === 'market'){
    localStorage.removeItem('market');
    return JSON.parse(localStorage.getItem('market')) || list2 || [
      {
        title:'没有青海湖和茶卡的青海',
        id:1651058003,
        img:img1
      },{
        title:'「人们」',
        id:1638051845,
        img:img2
      },{
       title:'湿湿的梦',
       id:1651158281,
       img:img3
      },{
        title:'即时乐树',
        id:1647018236,
        img:img4
      },{
        title:'在商业社会做个堂堂正正的废物会死吗？',
        id:1651117401,
        img:img5
      },{
        title:'萨尔兹卡默古特',
        id:1649846355,
        img:img6
      },{
        title:'夏天去香港看海',
        id:1650648598,
        img:img7
      },{
        title:'北京红冶钢厂',
        id:1651038482,
        img:img8
      }
    ]
  }
}
export default Homepage;

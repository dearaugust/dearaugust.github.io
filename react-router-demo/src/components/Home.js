import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn.js';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      data: [],
      tab: '',
      tabs: ['','good','share','ask','job'],
      page: 1
    }
  }
  loadDate(tab='',page=1){
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
      .then( res => this.setState({data: res.data.data}) )
  }
  componentWillMount(){  //组件加载就获取数据
    this.loadDate();
  }
  handleClick(tab){
    // console.log(tab);
    this.setState({tab});
    this.loadDate(tab);
  }
  selectPage(page){
    this.setState({page});
    this.loadDate(this.state.tab,page)
  }
  render(){
    let obj ={
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘'
    };
    let btns = [];
    // let nowPage = this.state.page<3 ? this.state.page +i : this.state.page +i-2;
    for (let i = 0; i < 5; i++) {
      let nowPage = this.state.page<3 ? i+1 : this.state.page +i-2;
      btns.push(
        <button key={i} style={{background: this.state.page===nowPage? 'hotpink' : 'teal'}}
        onClick={this.selectPage.bind(this,nowPage)}>
          {nowPage}
        </button>
      )
    }
    // var now = moment().format('YYYY-MM-DD HH:mm:ss');
    //   console.log(now);

    // console.log(this.state.data);

    // var oldTime = String()
    // var nowTime = String(now);
    // console.log(nowTime);

    return(
      <div>
        {/* <button onClick={this.handleClick.bind(this,'')}>全部</button>
        <button onClick={this.handleClick.bind(this,'good')}>精华</button>
        <button onClick={this.handleClick.bind(this,'share')}>分享</button>
        <button onClick={this.handleClick.bind(this,'ask')}>问答</button>
        <button onClick={this.handleClick.bind(this,'job')}>招聘</button> */}
        {
          this.state.tabs.map( (item,index) =>
            <button key={index} onClick={this.handleClick.bind(this,item)}
            style={{background: this.state.tab===item ? 'hotpink':'teal'}}>
              {!item ? '全部' : obj[item]}
            </button>
          )
        }

        {
          this.state.data.length==0 ? '加载中......Little Bitch!' :
          this.state.data.map(item =>
            <div key={item.id} style={{borderBottom:'1px solid #ccc'}}>
              <img src={item.author.avatar_url} alt='avatar' style={{width:'30px',height:'30px'}}/>
              <span>{item.reply_count}/{item.visit_count}</span>
              <button>{item.top ? '置顶' : item.good ? '精华' : obj[item.tab]}</button>
              <Link to={`/topic/${item.id}`}><span>{item.title}</span></Link>
              <span style={{float:'right'}}>{moment(item.last_reply_at).fromNow()}</span>
            </div>
          ) //日期
        }
        {btns}
      </div>
    )
  }
}

export default Home;

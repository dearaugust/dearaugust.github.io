import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import axios from 'axios'

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillMount(){  //组件加载就获取数据
    axios.get('https://cnodejs.org/api/v1/topics')
      .then( res => this.setState({data: res.data.data}) )
  }
  render(){
    console.log(this.state.data);
    let obj ={
      share: '分享',
      ask: '问答',
      job: '招聘',
      good: '精华'
    }
    return(
      <div>
        {
          this.state.data.map(item =>
            <div key={item.id}>
              <img src={item.author.avatar_url} alt='avatar' style={{width:'30px',height:'30px'}}/>
              <span>{item.reply_count}/{item.visis_count}</span>
              {item.top ? <button>置顶</button> : <button>{obj[item.tab]}</button>}
              <span>{item.title}</span>
            </div>
          )
        }
      </div>
    )
  }
}

export default Home;

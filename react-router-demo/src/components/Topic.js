import React from 'react';
import axios from 'axios';
import moment from 'moment';


class Topic extends React.Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillMount(){  //组件加载就获取数据
    let id = this.props.match.params.id
    axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then( res => this.setState({data: res.data.data}) ) //拿到后台返回数据 第一级是axios封装 第二级是
      // .catch( error => alert(error.message))
  }
  render(){
    console.log(this.state.data);
    console.log(this.props);
    return(
      <div>
        <p style={{color:'red'}}>{this.props.match.params.id}</p>
        <h2>{this.state.data.title}</h2>
        <ul>
          <li>发布于{moment(this.state.data.create_at).fromNow()}</li>
          {/* <li>作者{this.state.data.author.loginname}</li> */}
          <li></li>
        </ul>
        <div id='666' dangerouslySetInnerHTML={{__html:this.state.data.content}} />
      </div>
    )
  }
}

export default Topic;

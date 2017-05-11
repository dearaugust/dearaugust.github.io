import React from 'react';
import axios from 'axios';
//用户名 3f77acb1-d753-4393-b784-44913190e6a8
class User extends React.Component {
  constructor(){
    super();
    this.state={
      user:{},
      wait: true
    }
  }
  componentWillMount(nextP){
    axios.get(`https://cnodejs.org/api/v1/user/${this.props.match.params.loginname}`)
      .then( res => this.setState({user:res.data.data,wait:false}) )
      .catch( err => alert(err))
  }
  render(){
    console.log(this.state.user);
    let {user,wait} = this.state;
    return(
      <div>
        {/* User<br/> */}
        wait? <h1>safasfasfasf</h1> :
        <div>
          <img src={user.avatar_url} alt='avatar' />
          <h1>{user.loginname}</h1>
          <p>积分:{user.score}</p>
          <h2>发表过的文章:</h2>
          {
            // user.recent_topics.map( item =>
            //   <p key={item.id}>{item.title}</p>
            // )
          }
          <h2>回复过的文章:</h2>
          {
            // user.recent_teplies.map( item =>
            //   <p key={item.id}>{item.title}</p>
            // )
          }
        </div>
      </div>
    )
  }
}

export default User;

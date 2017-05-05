import React from 'react';

class Home extends React.Component {
  componentDidMount(){
    // alert('3秒后会跳转到New页面')
    setTimeout( ()=>{
      this.props.history.push('/new')
    },3000)
  }
  handleClick(){
    this.props.history.go(-1)
  }
  render(){
    console.log(this);
    return(
      <div>
        Home
        <button onClick={this.handleClick.bind(this)} >返回</button>
      </div>
    )
  }
}

export default Home;

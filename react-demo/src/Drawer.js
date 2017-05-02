import React from 'react'

class Drawer extends React.Component {
  constructor(){
    super();
    this.state={
      show: false
    }
  }  //定义 state
  open(){
    // console.log(this.state.show);
    this.setState({show: ! this.state.show})
  } //修改 state 用 setState
  render(){
    return(
      <div style={{height:'100vh',width:'300px',position:'absolute',top:'0',left: this.state.show ? '0' : '-300px',bottom:'0',transition:'left .5s',background:'teal'}}>
      </div>
    )
  }
}

export default Drawer

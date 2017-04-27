import React from 'react'

import bg from './img.jpg'
class Header extends React.Component {
  render(){
    let styles = {
      sty1:{
        fontSize:'30px',
        color:'#F44336'
      },
      sty2:{
        textAlign:'center',
        color:'yellow'
      }
    }
    let styles2 = {
        color:'green'
    }
    return(
      <div style={{backgroundImage:`url(${bg})`}}>
        <h1>I am a 头部</h1>
        <h2 style={styles.sty1}>我是一个P</h2>
        <h2 style={styles.sty1}>我是二个P</h2>
        <h2 style={Object.assign({}, styles.sty1, styles.sty2)}>我是三个P 特殊</h2>
        <h2 style={{...styles.sty1,...styles.sty2,...styles2}}>我是四个P ... 特殊</h2>
      </div>
    )
  }
}

export default Header;

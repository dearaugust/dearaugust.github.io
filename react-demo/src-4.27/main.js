import React from 'react';
import img1 from './img.jpg';
import tab1 from './1.jpg';
import tab2 from './2.jpg';
import tab3 from './3.jpg';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      num: 0,
      tab: 0,
      show:true
    }
  }
  addClick(num){
    // console.log(this);
    this.setState({
      num: this.state.num + num,
      show : !this.state.show
    })
  }
  handleTab(tab){
    this.setState({
      tab: tab
    })
  }
  render(){
    let buttonStyle = {
      fontSize: '20px'
    }
    let imgStyle = {
      width:'100px',
      background:'#B71C1C',
      height: this.state.show ? '100px' : '0px',
      transition: 'height .5s'
    }
    return(
      <div id="main">
        <h1>内容function方法</h1>
        <p style={{fontSize:'30px',color:'red'}}>数量是:{this.state.num}</p>
        <button style ={buttonStyle} onClick= {this.addClick.bind(this,+1)} >+1</button>
        <button style ={buttonStyle} onClick= {this.addClick.bind(this,-1)} >-1</button>
        <br/>

        <button style ={buttonStyle} onClick= {this.handleTab.bind(this,0)} >选项卡1</button>
        <button style ={buttonStyle} onClick= {this.handleTab.bind(this,1)} >选项卡2</button>
        <button style ={buttonStyle} onClick= {this.handleTab.bind(this,2)} >选项卡3</button>
        <br/>
        {
          this.state.tab===0 ? <div>我是选项卡一<br/><img src={tab1}/></div> :
          this.state.tab===1 ? <div>我是选项卡二<br/><img src={tab2}/></div> : <div>我是选项卡三<br/><img src={tab3}/></div>
        }
        <div style={imgStyle}></div>
        {/* <img style={imgStyle} src = {img1} alt="image"/> */}
      </div>
    )
  }
};

export default Main;

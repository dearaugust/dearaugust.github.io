import React from 'react';
import ReactDOM from 'react-dom';

import './main.css'
// import App from './app.js'

let eats = ['烧饼','油条','包子','馄饨','面条','大煎饼','疙瘩汤','豆浆','豆腐脑','干锅鸭头','apple','orange'];
class App extends React.Component {
  constructor(){
    super();
    this.state={
      start: false,
      which: '请开始选择',
      what: []
    }
  }
  getRandom(m,n){  
    return Math.floor(Math.random()*(n-m)+m)
  }
  renderBg(){
    // console.log(this.state.what);
    let oldWhat = this.state.what;
    for (var i = 0; i < oldWhat.length; i++) {
      if(oldWhat[i].opacity <= 0){
        oldWhat.splice(i,1);  //删除数组
        i--;
      }else{
        oldWhat[i].opacity -= 10;
      }
    }
    if(this.state.start && oldWhat.length < 10){
      oldWhat = [
        ...oldWhat,
        {
          top: this.getRandom(0,100),
          left: this.getRandom(0,100),
          opacity: 100,
          title: eats[Math.floor(Math.random()*eats.length)],
          id: Date.now()
        }
      ]   //
    }
    if(oldWhat.length === 0){
      clearInterval(this.renderBg)
    }
    this.setState({what: oldWhat})
  }
  handleStart(){
    clearInterval(this.startEat)
    if(!this.state.start){
      clearInterval(this.startBg);
      this.startEat = setInterval( () => {
        // console.log(eats.length);
        this.setState({which:eats[Math.floor(Math.random()*eats.length)] })
      },100);    //开始或停止计时器
      this.startBg = setInterval( () => {
        this.renderBg()
      },100)
    }else{
      clearInterval(this.startEat)
      // clearInterval(this.startBg)
    }
    this.setState({start: !this.state.start})
  }
  // Math.floor()
  // Math.random()
  render(){
    // console.log(this.state.what);
    let newBg = this.state.what.map( item =>
      <p key={item.id} style={{top: `${item.top}vh`, left: `${item.left}vw`, opacity: `${item.opacity/100}`}}>{item.title}</p>
    )
    return(
      <div className="play">
        <div>
          {newBg}
          <h1>今天吃什么:{this.state.which}</h1>
          <button style={{}} onClick={this.handleStart.bind(this)}>{this.state.start ? '停止' : '开始'}</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('#root'))

import React from 'react';
import ReactDOM from 'react-dom';

// import './main.css'
// import App from './app.js'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  startCount(){
    clearInterval(this.interval)
    this.interval = setInterval( () => this.setState({num:this.state.num+1}) ,1000)
  }
  pauseCount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div style={{fontSize:'30px'}}>
        {this.state.num}<br/>
        <button onClick={this.startCount.bind(this)}>开始计时</button>
        <button onClick={this.pauseCount.bind(this)}>停止计时</button>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('#root'))

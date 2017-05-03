import React from 'react';

import Test from './Test.js'

class App extends React.Component {
  constructor(props){
    super(props);  //可以呼叫父组件的props
    console.log(this.props);
    console.log('constructor');
    this.state = {
      // name: this.props.name,
      num: 0,
      destroy : false
    }
  }
  componentDidMount(){
    console.log('did mount');
    // setInterval(()=>this.setState({num:this.state.num+1}),2000)
  }
  componentWillMount(){
    console.log('will mount');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('should update');
    console.log(nextProps,nextState);
    return nextState.num <= 10 ? true : false  //判断下一次的是否小于10,'<小于'执行,'>大于'不执行
  }
  componentWillUpdate(nextProps,nextState){
    console.log('will update');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('did update');
    console.log(prevProps,prevState);
    console.log('//-----------------结束-----------------//');
  }
  render(){
    console.log('render');
    console.log(this.state.num);
    return(
      <div>
        App<br/>
        {this.state.num}<br/>
        <button onClick={() => this.setState({num:this.state.num+1})}>+1</button>
        <button onClick={() => console.log(this.state)}>show state</button>
        {this.state.destroy ? null : <Test num={this.state.num} />}
        <button onClick={() => this.setState({destroy:true})} >销毁Test组件</button>
      </div>
    )
  }
}

export default App;

// 触发更新 修改props,通过setState修改state会触发组件的更新阶段

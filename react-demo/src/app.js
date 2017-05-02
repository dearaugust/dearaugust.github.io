import React from 'react';

import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

import Drawer from './Drawer.js'
// import $ from 'jquery';

class App extends React.Component {
  handleClick(){
    // $('#test').toggle('slow')
    console.log(this.refs.test)
    console.log(this.aaa)
    // this.input.focus()  //点击获取焦点
    console.log(this.a)
    this.a.open()  //ref a 调用'Drawer'组件下的方法
  }
  render(){
    return(
      <div id="app">
        <Header/>
        <Main/>
        <Footer/>
        <Drawer ref = {a =>this.a =  a }/>
        <p ref={(test) => this.aaa = test}>aaaaa</p>
        <p ref="test">bbbbb</p>
        <input placeholder='ohohoh' ref={(input) => this.input = input} />
        <button onClick={this.handleClick.bind(this)} >click11111111111111111111111111111111111111</button>
      </div>
    )
  }
};

export default App

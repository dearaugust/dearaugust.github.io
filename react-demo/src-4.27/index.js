import React from 'react';
import ReactDOM from 'react-dom'; //把react渲染到HTML下

let age = 27;
function sum(x,y){
  return x*y
}
let dom = <div>
  <h1>哈哈哈</h1>
</div>
let hello = <div>
  <div id="head">
    {dom}
    <p className="age">hello world ! {(age+100)*2} ! {sum(2,4)}</p>
    {/* <input type="text" value="大门"/> */}
    {/* <input className="button" type="button" value="小门"/> */}
    <p></p>
  </div>
</div>
ReactDOM.render(hello,document.getElementById('root'));
// ReactDOM.render(
//   <h1>哈哈哈</h1>,document.querySelector('#head'));
// # querySelector 拿到('#id','.class','div等标签')
// # querySelectorAll 拿到数组 [0]
//代替Jquery '$'符;

//## JSX语法
// JSX语法需要babel进行编译,React,createElement();
// Adjacent JSX elements must be wrapped in an enclosing tag
// ^相邻的JSX元素必须包裹在一个一个闭合标签内^
// 每一个标签必须闭合,单标签 如<img sec="" />需要'/'关闭;
// class => className 写成 ; for => htmlFor ;
// 标签区分大小写;
// 在JSX语法中可以嵌入变量或求职表达式,可以写入JS语法,用'{}'包裹,不可以写JS语句;

// 1.---------------------------------
// let Diyi = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>第一种组件的创建方法,即将废弃</h1>
//       </div>
//     )
//   }
// })
// ReactDOM.render(<Diyi></Diyi>,document.querySelector('#root'));

// 2.--------------------------------
// function World(){
//   let sex = true;
//   return(
//     <div>
//       <h2>{ sex ? '男':'女' }</h2>
//     </div>
//   )
// }
// function Dier({title,age}) {
//   let a = 888; //可以嵌入变量
//   return(
//     <div>
    // {title}
    // <br/>
    // {age}
//       <World></World>
//       <h1>第二种组件的创建方式,必须有返回值,'{a}'而且返回值必须是JSX elements</h1>
//     </div>
//   )
// }
// ReactDOM.render(<Dier title='august' age={160819} />,document.querySelector('#root'));
//
// 3.----------------------------------
// class Disan extends React.Component {
//   render(){
//     return(
//       <div>
//         <h2>第三种组件的穿件方式,必须有render()内部必须有return()</h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Disan></Disan>,document.querySelector('#root'));

//## React组件 (3种方法)
// 1. React.createClass ;当做自定义标签用,首字母必须大写
// 2. function Name() {} ;Name是名称   //不用生命周期函数等才用function方法 //默认接收 props 参数
// 3. class Name extends React.Component { } ;

import App from './app.js';

import './main.css';

ReactDOM.render(<App/>,document.querySelector('#root'));

//## 对象属性的拓展
var target = {a:1};

var source1 = {b:2};
var source2 = {c:3};
var source3 = {d:4};
var source4 = {e:5};
var source5 = {a:6};

Object.assign(target,source1,source2,source3,source4,source5);
console.log(target);

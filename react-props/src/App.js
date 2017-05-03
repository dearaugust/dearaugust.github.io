import React from 'react';

import Btn from './Btn.js';
import Card from './Card.js';
import CardArr from './CardArr.js';
import Child from './Child.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [  //数组
        {index: 1, title: 'first', date: '2017.5.2'},
        {index: 2, title: 'second', date: '2016.8.19'},
        {index: 3, title: 'third', date: '2016.2.4'},
        {index: 4, title: 'forth', date: '2015.11.11'}
      ]
    }
  }
  render(){
    return(
      <div>
        <Btn title='注册'/>
        <Btn title='登录' pad={20}/>
        <Btn title='确定' bg='hotpink'/>
        <Btn />
        {
          this.state.data.map( item =>
            <Card key={item.index} {...item} />
          )  //遍历数组 .map(创建新组件)
        }
        <CardArr data={this.state.data} />
        {
          //给CardArr 组件属性'data'赋值
        }
        <Child>
          <h1>sadgsdrweg</h1>
        </Child>
      </div>
    )
  }
}

export default App;
// props 与子组件沟通 只能从'父组件'往'子组件'传属性
